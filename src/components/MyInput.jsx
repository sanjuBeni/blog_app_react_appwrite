import React, {forwardRef, useId} from 'react'

const MyInput = forwardRef(({
  lable,
  type="text",
  inputClass = "",
  lableClass = "",
  placeholde,
  isRequired,
  ...props
}, ref) => {
  const id = useId()
  return (
    <div className="w-full">
      {lable && <label htmlFor={id} className={`${lableClass}`}>{lable}</label>}
      <input type={type} id={id} className={`${inputClass}`} required={isRequired} {...props}/>
    </div>
  )
})

export default MyInput