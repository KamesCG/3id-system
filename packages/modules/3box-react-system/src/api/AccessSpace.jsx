/* --- Global Dependencies --- */
import React, { useEffect, useState } from 'react'
import { BoxContext } from '3box-react-state'
import { useOpenRequestEffect, useSpaceReadyEffect } from './effects'
import Login from './Login'
import SpaceOpen from './SpaceOpen'
/**
 * @function AccessSpaces
 * @param {*} props 
 */
const AccessSpaces = ({ box, ...props }) => { 
  const login = useOpenRequestEffect(box)
  const space = useSpaceReadyEffect(box, props)

  return(
    <>
      {
        login.isLoggedIn
        ? null
        : <Login {...props}/>
      }

      {
        login.isLoggedIn && !space.ready
        ? <SpaceOpen space={props.space} auto={props.spaceAuto} />
        : null
      }
      
      {
        login.isLoggedIn && space.ready
        ? props.children
        : null
      }
  
    </>
)}

AccessSpaces.defaultProps = {
  componentLogin: <Login />,  
  loginAuto: false,
  spaceAuto: false,
  threadAuto: false,
  isLoginDisabled: false,
  
}

AccessSpaces.propTypes = {
  space: PropTypes.string,
}

export default props =>
<BoxContext>
  { box => ( <AccessSpaces box={box} {...props} /> )}
</BoxContext>