import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

import categoriasRepository from '../../../repositories/categorias';
import { Link } from 'react-router-dom';
import { ButtonContainer } from '../Video/styles';

function CadastroCategoria() {
  const InitialValues = {
    titulo: '',

    cor: '#000000',
    link_extra: {
      text: '',
      url: '',
    },
  };

  const [values, setValues] = useState(InitialValues);

  return (
    <PageDefault>
      <h1>Cadastro de Categoria:</h1>

      <form
        onSubmit={async function handleSubmit(event) {
          event.preventDefault();

          await categoriasRepository.create(values);
          alert(`${values.titulo} cadastrado com sucesso`);

          setValues(InitialValues);
        }}
      >
        <FormField
          label="Nome da Categoria"
          type="text"
          name="titulo"
          value={values.titulo}
          onChange={(event) => {
            setValues({ ...values, titulo: event.target.value });
          }}
        />
        <FormField
          label="Subtitulo"
          type="text"
          name="subtitulo"
          value={values.link_extra.text}
          onChange={(event) => {
            setValues({
              ...values,
              link_extra: { ...values.link_extra, text: event.target.value },
            });
          }}
        />
        <FormField
          label="Link do subtitulo"
          type="text"
          name="link-subtitulo"
          value={values.link_extra.url}
          onChange={(event) =>
            setValues({
              ...values,
              link_extra: { ...values.link_extra, url: event.target.value },
            })
          }
        />

        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange={(event) => {
            setValues({ ...values, cor: event.target.value });
          }}
        />
        <ButtonContainer>
          <Button type="submit">Cadastrar</Button>
          <Link to="/cadastro/Video">
            <Button>Cadastrar vídeo</Button>
          </Link>
        </ButtonContainer>
      </form>
    </PageDefault>
  );
}

export default CadastroCategoria;
