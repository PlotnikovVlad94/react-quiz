import React from 'react'
import './Input.scss'

const Input = props => {

  function isInvalid({ valid, touched, shouldValidate }) {
    return !valid && shouldValidate && touched
  };

  const cls = ['input-container'];
  const inputType = props.type || 'text';
  const htmlFor = `${inputType}-${Math.random()}`;

  if (isInvalid(props)) {
    cls.push('invalid')
  }

  return (
    <div className={cls.join(' ')}>
      <label htmlFor={htmlFor}>{props.label}</label>
      <input
        type={inputType}
        id={htmlFor}
        value={props.value}
        onChange={props.onChange}
      />

      {
        isInvalid(props)
          ? <span>{props.errorMessage || 'Проверьте введенные данные'}</span>
          : null
      }

    </div>
  )
}

export default Input