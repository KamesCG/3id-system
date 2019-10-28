/**
 * @name FormStorageSet
 * @author kamescg
 * @version 0.0.1
 * @description Generic 3Box storage set form.
 */

 /* --- Global --- */
import React, { useState, useEffect } from 'react';
import useForm from "react-hook-form";
import { Field } from '@horizin/design-system-molecules'
import { AccessButton } from '3box-react-system'

/* --- Component --- */
const FormStorageSet = props => {
  const [ status, setStatus ] = useState(props.status) 
  const { handleSubmit, register, errors, reset } = useForm();

  /**
   * @name statusParentPassEffect
   * @description Set status from parent component state. 
   */
  useEffect( () => { 
    setStatus(props.status)
  }, [props.status])

  /**
   * @name onSubmitHandler
   * @description When form is submitted pass values back to parent component.
   * @todo Add field validation via Yup.
   */
  const onSubmit = async (values) => {
    props.onSubmit && props.onSubmit(values)
  }

  /**
   * @name onResetHandler
   * @description Reset form values.
   */
  const onResetHandler = () => {
    setStatus(false)
    reset()
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
          <Field
            name="key"
            variants={['text']}
            register={register}
            errors={errors}
            placeholder="Key"
            sx={{
              my: 1
            }}
          />
          <Field
            name="value"
            variants={['text']}
            register={register}
            errors={errors}
            placeholder="Value"
            sx={{
              my: 1
            }}
          />
        <Atom.Flex between>
          <AccessButton {...props.accessLevel} />
          <SumbitStatusHandler status={status} />
        </Atom.Flex>
      </form>
    </>
  );
}

const SumbitStatusHandler = props => { 
 return(
  <Atom.Span>
    {
      props.status && 
      <Atom.Flex column>
        <Atom.Span><strong>Set Success!</strong> Check your profile.</Atom.Span>
        <span onClick={resetHandler} ><Atom.Span>Reset Form</Atom.Span></span>
      </Atom.Flex>
    }
  </Atom.Span>
)}


export default FormStorageSet