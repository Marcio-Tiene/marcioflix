import React from 'react'

function FormField({ children, value, onChange, type, name }) {
    return (
        <div>

            <label>
                {children}
                <input
                    type={type}
                    value={value}
                    name={name}
                    onChange={onChange}
                />
            </label>
        </div>
    )
}

export default FormField;
