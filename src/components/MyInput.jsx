import React, {forwardRef, useId} from 'react'

const MyInput = forwardRef(({
  lable,
  type = "text",
  inputClass = "",
  lableClass = "",
  placeholder = "",
  isRequired = false,
  ...props
}, ref) => {
  const id = useId()
  return (
    <div className="w-full">
      {lable && <label htmlFor={id} className={`${lableClass}`}>{lable}</label>}
      <input type={type} id={id} className={`${inputClass}`} required={isRequired} placeholder={placeholder} {...props}/>
    </div>
  )
})

export default MyInput