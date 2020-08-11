import { useState } from 'react';

function useForm(InitialValues) {
  const [values, setValues] = useState(InitialValues);

  function setValue(key, value) {
    // key: nome, descricao, bla, bli
    setValues({
      ...values,
      [key]: value, // nome: 'value'
    });
  }

  function handleChange(event) {
    setValue(event.target.getAttribute('name'), event.target.value);
  }

  function clearForm() {
    setValues(InitialValues);
  }

  return { values, setValues, handleChange, clearForm };
}

export default useForm;
