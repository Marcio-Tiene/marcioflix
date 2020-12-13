import React, { useState, useEffect } from 'react';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';
import categoriasRepository from '../../../repositories/categorias';
import { Link } from 'react-router-dom';
import { ButtonContainer } from '../Video/styles';

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
    // const URL = window.location.href.includes('localhost')
    //   ? 'http://localhost:8080/categorias'
    //   : `https://marciotflix.herokuapp.com/categorias`;

    fetch(`https://marciotflix.herokuapp.com/categorias`).then(
      async (respostaDoServer) => {
        const resposta = await respostaDoServer.json();
        setCategorias([...resposta]);
      }
    );
  }, []);

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {values.titulo}</h1>

      <form
        onSubmit={async function handleSubmit(event) {
          event.preventDefault();
          await categoriasRepository.create(values);

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
          label="Subtitulo"
          type="text"
          name="subtitulo"
          value={values.link_extra}
          onChange={handleChange}
        />
        <FormField
          label="Link do subtitulo"
          type="text"
          name="link-subtitulo"
          value={values.link_extra}
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
        <ButtonContainer>
          <Button type="submit">Cadastrar</Button>
          <Link to="/cadastro/Video">
            <Button>Cadastrar vídeo</Button>
          </Link>
        </ButtonContainer>
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
