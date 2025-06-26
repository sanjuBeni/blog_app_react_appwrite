import React from 'react'

export default function MyButton({
    children,
    type = "button",
    bgColor = "bg-blue-600",
    textColor = "text-white",
    btnClass = "",
    ...props  
}) {
  return <button type={type} className={`${bgColor} ${textColor} ${btnClass}`} {...props}>{children}</button>
}
