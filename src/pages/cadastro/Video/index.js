import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import FormField from '../../../components/FormField';
import useform from '../../../hooks/useForm';
import PageDefault from '../../../components/PageDefault';
import Button from '../../../components/Button';
import VideoRepository from '../../../repositories/videos';
import categoriasRepository from '../../../repositories/categorias';
import { ButtonContainer } from './styles';

function CadastroVideo() {
  const history = useHistory();
  const [categorias, setCategorias] = useState([]);
  const categoryTitles = categorias.map(({ titulo }) => titulo);
  const { handleChange, values } = useform({});

  useEffect(() => {
    categoriasRepository.getAll().then((categoriasFromServer) => {
      setCategorias(categoriasFromServer);
    });
  }, []);

  return (
    <PageDefault>
      <h1>Pagina de cadastro de videos</h1>

      <form
        onSubmit={(event) => {
          event.preventDefault();

          const categoriaEscolhida = categorias.find((categoria) => {
            return categoria.titulo === values.categoria;
          });
          console.log(categoriaEscolhida.id);

          VideoRepository.create({
            titulo: values.titulo,
            url: values.url,
            categoriaId: categoriaEscolhida.id,
          }).then(() => {
            history.push('/');
          });
        }}
      >
        <FormField
          label="Título do Vídeo"
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
        />

        <FormField
          label="Url"
          name="url"
          value={values.url}
          onChange={handleChange}
        />

        <FormField
          label="Categoria"
          name="categoria"
          type="datalist"
          value={values.categoria}
          onChange={handleChange}
          suggestions={categoryTitles}
        />
        <ButtonContainer>
          <Button type="submit">Cadastrar</Button>
          <Link to="/cadastro/categoria">
            <Button>Cadastrar categoria</Button>
          </Link>
        </ButtonContainer>
      </form>
    </PageDefault>
  );
}

export default CadastroVideo;
