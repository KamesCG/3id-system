/* --- Global Dependencies --- */
import idx from 'idx'
import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Button, Span } from '@horizin/design-system-atoms'
import { BoxInject, BoxContext } from '3box-react-state'
import BoxSpaceOpen from '../components/BoxSpaceOpen'
import ThreadJoin from './ThreadJoin'
import BoxLoginButton from '../components/BoxLoginButton'
import LoginButton from './LoginButton'
import Login from './Login'

import { useSpaceReadyEffect, useLoggedInEffect } from './effects'
import { minSatisfying } from 'semver'
/* --- React Component --- */
const BoxAccess = ({
  level, ...props
}) => {
  return (
    <BoxContext>
      {box => (
        <>
          {
            level === 'disabled' &&
            props.children
          }
          {
            level === 'enabled' &&
            <LevelEnabled box={box} {...props} />
          }
          {
            level === 'login' &&
            <LevelLogin box={box} {...props} />
          }
          {
            level === 'space' &&
            <LevelSpace box={box} {...props} />
          }
          {
            level === 'thread' &&
            <LevelThread box={box} {...props} />
          }

        </>
      )}
    </BoxContext>
  )
}

BoxAccess.defaultProps = {
  componentLogin: <LoginButton />,

  componentIsLoggedOut: false,
  componentIsLoading: false,
  componentIsLoggedIn: false,

  componentLoading: null,
  componentSpace: null,
  componentThread: null,

  loginAuto: false,
  spaceAuto: false,
  threadAuto: false,
  isLoginDisabled: false,

  level: 'login',
  space: undefined,
  threadName: undefined,

  styledLogin: {
    variant: 'blue',
    width: '100%'
  },
  styledSpace: {
    variant: 'blue',
    width: '100%'
  },
  styledThread: {
    variant: 'blue',
    width: 1
  }
}

BoxAccess.propTypes = {
  space: PropTypes.string,
  threadName: PropTypes.string,
  level: PropTypes.string
}

export default props => <BoxInject><BoxAccess {...props} /></BoxInject>

/**
 * @function LevelEnabled
 * @param {*} props 
 */
const LevelEnabled = ({ box, children }) => box.isEnableSuccess ? children : null

/**
 * @function LevelLogin
 * @param {*} props 
 */
const LevelLogin = ({
  box, styled, styledLogin, variant,
  componentLogin, children, ...props
}) => {
  const { isLoggedIn } = box
  return (
    props.isLoginHidden ? null :
      !isLoggedIn
        ? componentLogin
          ? componentLogin
          : props.isLoginDisabled ? null : null
        : children
  )
}


/**
 * @function LevelSpace
 * @param {*} props 
 */
const LevelSpace = ({ box, children, ...props }) => {
  const isLoggedIn = useLoggedInEffect(box)
  const isSpaceReady = useSpaceReadyEffect(box, props)
  return (
    <>

      {
        (!isLoggedIn && !isSpaceReady)
          ? isSpaceReady
            ? null
            : <Login
              isLoggedIn={props.children}
              componentIsLoggedOut={props.componentIsLoggedOut}
              componentIsLoading={props.componentIsLoading}
              componentIsLoggedIn={props.componentIsLoggedIn}
            />
          : children
      }

    </>
  )
}

/**
 * @function LevelThread
 * @param {*} props 
 */
const LevelThread = ({
  box,
  space, threadName, threadAuto, spaceAuto, variant,
  styled, styledLogin, styledSpace, styledThread,
  componentSpace, componentThread, componentLogin, ...props
}) => {
  const { isLoggedIn } = box
  const [threadLoaded, setThread] = useState()
  const [spaceAvailable, setIsSpaceAvailable] = useState()

  useEffect(() => {
    if (idx(box, _ => _.auth.spaces[space].instance)) {
      setIsSpaceAvailable(true)
    }
  }, [idx(box, _ => _.auth.spaces[space].instance)])

  useEffect(() => {
    if (idx(box, _ => _.threads[threadName].instance)) {
      setThread(true)
    }
  }, [idx(box, _ => _.threads[threadName])])

  return (
    <>

      {
        props.componentLoading ?
          !spaceAvailable && !spaceAuto
          : props.componentLoading
      }

      {
        !isLoggedIn && !spaceAvailable && !threadLoaded
          ? props.isLoginDisabled ? null
            : componentLogin
          : null
      }

      {
        isLoggedIn && !spaceAvailable &&
        <BoxSpaceOpen
          auto={spaceAuto}
          space={space}
        >
          <>
            {
              componentSpace
                ? componentSpace
                : <Button {...styledSpace}>open {space} space</Button>
            }
          </>
        </BoxSpaceOpen>
      }

      {
        isLoggedIn && spaceAvailable && !threadLoaded &&
        <ThreadJoin
          auto={threadAuto}
          space={space}
          threadName={threadName}
          options={props.optionsThread}
        >
          <>
            {
              componentThread
                ? componentThread
                : <Button {...styledThread}>Join {threadName} Thread</Button>
            }
          </>

        </ThreadJoin>
      }

      {

        isLoggedIn && spaceAvailable && threadLoaded
          ? props.children
          : null
      }

    </>
  )
}