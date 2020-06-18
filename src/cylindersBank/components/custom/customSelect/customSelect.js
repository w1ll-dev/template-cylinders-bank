import React from 'react'
import "./customSelect.css"

const CustomSelect = ({ options }) =>
    <select className='custom-select'>
        {
            options.map(
                (opt, index) => <option key={`${index}`}>{opt}</option>
            )
        }
    </select>

export default CustomSelect
