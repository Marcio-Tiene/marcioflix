import React, { useState, useEffect } from 'react';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';

function CadastroCategoria() {
  const InitialValues = {
    titulo: '',
    descricao: '',
    cor: '#000000',
  };

  const { values, handleChange, clearForm } = useForm(InitialValues);

  const [categorias, setCategorias] = useState([]);

  // ============

  useEffect(() => {
    // colocar a url do hiroko aqui
    const URL = window.location.href.includes('localhost')
      ? 'http://localhost:8080/categorias'
      : 'https://marciotflix.herokuapp.com/categorias';
    fetch(URL).then(async (respostaDoServer) => {
      const resposta = await respostaDoServer.json();
      setCategorias([...resposta]);
    });
  }, []);

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {values.titulo}</h1>

      <form
        onSubmit={function handleSubmit(event) {
          event.preventDefault();

          setCategorias([...categorias, values]);

          clearForm();
        }}
      >
        <FormField
          label="Nome da Categoria"
          type="text"
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />

        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        />

        <Button>Cadastrar</Button>
      </form>

      <ul>
        {categorias.map((categoria, indice) => {
          return <li key={`${categoria}${indice}`}>{categoria.titulo}</li>;
        })}
      </ul>
    </PageDefault>
  );
}

export default CadastroCategoria;
