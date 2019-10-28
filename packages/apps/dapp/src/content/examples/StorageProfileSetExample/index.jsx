

import {
  Login,
  SpaceOpen,
  StorageSet
} from '3box-react-system'


import { 
  FormStorageSet,
} from 'forms'
import { useState, useEffect } from 'react'


/**
 * @function StorageSetForm
 * @param {*} props 
 */
const StorageSetForm = props => { 
  const [ values, setValues ] = useState()
  const [ isStorageSet, setStorageSet ] = useState()  
  const [ storageStatus, setStorageStatus ] = useState()

  useEffect(() => { 
    if(isStorageSet)
      setStorageStatus(true)
  }, [isStorageSet])
 return(
  <>
    <FormStorageSet onSubmit={setValues} status={storageStatus} />
    {
      values && <StorageSet access='public' index={values.key} value={values.value} onSet={setStorageSet}  /> 
    }
    <Atom.Box sx={{mt: 3}}>
      <Login />
    </Atom.Box>
  </>
)}

const StorageProfileSetExample = props => {
  return (
    <Atom.Container my={3}>
      <Atom.Flex alignCenter sx={{ bg: 'white', p: 3, flex: 1, borderRadius: 8 }}>
        <Atom.Flex column flex={2} sx={{ width: '40%', p:4 }}>
          <Atom.Heading md heavy>Set</Atom.Heading>
          <Atom.Paragraph>
            Set a value in a 3Box profile or space. 
          </Atom.Paragraph>
          <StorageSetForm />
        </Atom.Flex>
        <Atom.Flex flex={3} width={'60%'}>
          <Atom.Box gradient='gray' sx={{ p: 3, px: 4, width: '100%' }}>
            <code>
              <pre>
                {`
import React from 'react'
import { StorageSet } from '3ID-system'
import { FormStorageSet } from '3ID-system-helpers'
const StorageSetForm = props => { 
  const [ values, setValues ] = useState()
  const [ isStorageSet, setStorageSet ] = useState()  
  const [ storageStatus, setStorageStatus ] = useState()

  useEffect(() => { 
    if(isStorageSet)
      setStorageStatus(true)
  }, [isStorageSet])
 return(
  <>
    <FormStorageSet 
      onSubmit={setValues} 
      status={storageStatus} />
    {
     values && 
      <StorageSet 
        access='public' 
        index={values.key} 
        value={values.value}
        space={undefined} // OPTIONAL VALUE
        onSet={setStorageSet}  
      /> 
    }
  </>
)}
`}
              </pre>
            </code>
          </Atom.Box>
        </Atom.Flex>
      </Atom.Flex>
    </Atom.Container>
  )
}


export default StorageProfileSetExample