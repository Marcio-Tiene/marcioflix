import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';

function CadastroCategoria() {

  const [values, setValues] = useState({ name: '', description: '', color: '#000000' })
  const [categorias, setCategorias] = useState([])


  function ValueHandler(event) {
    setValues({
      ...values,
      [event.target.getAttribute('name')]: event.target.value
    })
  }

  function ValuesSubmitHandler(event) {
    event.preventDefault();
    setCategorias([...categorias,
      values])
    setValues({ name: '', description: '', color: '#000000' })

  }


  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {values.name} {values.description} {values.color}</h1>

      <form
        onSubmit={ValuesSubmitHandler}>

        <FormField
          label='Nome'
          type='text'
          name='name'
          value={values.name}
          onChange={ValueHandler}
        />

        <FormField
          label='Descrição'
          type='text'
          name='description'
          value={values.description}
          onChange={ValueHandler}
        />

        <FormField
          label='Cor'
          type='color'
          name='color'
          value={values.color}
          onChange={ValueHandler}
        />



        <button>
          Cadastrar
        </button>
      </form>

      <ul>
        {categorias.map((values, indice) => {
          return (
            <li key={`${values.name}${indice}`}>
              {values.name}  {values.description}  {values.color}
            </li>
          )
        })}
      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  )
}

export default CadastroCategoria;