import React from 'react';
import PropTypes from 'prop-types';

function FormField({ children, value, onChange, type, name }) {
  const fieldId = `id_${name}`;

  return (
    <div>
      <label htmlFor={fieldId}>
        {children}
        <input
          id={fieldId}
          type={type}
          value={value}
          name={name}
          onChange={onChange}
        />
      </label>
    </div>
  );
}

FormField.defaultProps = {
  type: 'text',
  value: '',
};

FormField.propTypes = {
  children: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
};

export default FormField;
