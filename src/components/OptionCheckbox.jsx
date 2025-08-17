import React from 'react'

const OptionCheckbox = ({ id, label, checked, onChange }) => {
  return (
    <div className="option" onClick={onChange}>
      <div className="custom-checkbox">
        <input 
          type="checkbox" 
          id={id} 
          checked={checked}
          onChange={onChange}
        />
        <div className="checkmark"></div>
      </div>
      <label htmlFor={id}>{label}</label>
    </div>
  )
}

export default OptionCheckbox
