import React, { forwardRef } from 'react'
import Select from 'react-select'

function SelectInput({
    className = "",
    name = "color",
    // classNamePrefix="select"
    defaultValue = { value: 'ocean', label: 'Ocean', color: '#00B8D9', isFixed: true },
    isDisabled = false,
    isLoading = false,
    isClearable = true,
    isSearchable = true,
    isMulti = true,
}, ref) {

    const colourOptions = [
        { value: 'ocean', label: 'Ocean', color: '#00B8D9', isFixed: true },
        { value: 'blue', label: 'Blue', color: '#0052CC', isDisabled: true },
        { value: 'purple', label: 'Purple', color: '#5243AA' },
        { value: 'red', label: 'Red', color: '#FF5630', isFixed: true },
        { value: 'orange', label: 'Orange', color: '#FF8B00' },
        { value: 'yellow', label: 'Yellow', color: '#FFC400' },
        { value: 'green', label: 'Green', color: '#36B37E' },
        { value: 'forest', label: 'Forest', color: '#00875A' },
        { value: 'slate', label: 'Slate', color: '#253858' },
        { value: 'silver', label: 'Silver', color: '#666666' },
        ];

  return (
    <div>
        <Select
            className="basic-single"
            defaultValue={colourOptions[0]}
            isDisabled={isDisabled}
            isLoading={isLoading}
            isClearable={isClearable}
            isSearchable={isSearchable}
            isMulti={isMulti}
            name="color"
            options={colourOptions}
        />
    </div>
  )
}

export default  forwardRef(SelectInput)
