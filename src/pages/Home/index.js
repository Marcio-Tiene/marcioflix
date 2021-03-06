import React, { useEffect, useState } from 'react';
import PageDefault from '../../components/PageDefault';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import categoriasRepository from '../../repositories/categorias';
import Button from '../../components/Button';
import { Link } from 'react-router-dom';
import Menu from '../../components/Menu';

function Home() {
  const [dadosIniciais, setDadosIniciais] = useState([]);
  useEffect(() => {
    async function LoadAll() {
      try {
        const response = await categoriasRepository.getAllWithVideos();

        setDadosIniciais(response);
      } catch (err) {
        console.log(err.message);
      }
    }

    LoadAll();
  }, []);
  console.log(dadosIniciais);
  console.log(process.env.REACT_APP_API_KEY);
  return (
    <PageDefault paddingAll={0}>
      <Menu>
        <Button as={Link} className="buttonLink" to="/cadastro/Video">
          Novo Vídeo
        </Button>
      </Menu>
      {dadosIniciais.length === 0 && <div>Loading...</div>}

      {dadosIniciais.map((categoria, indice) => {
        if (indice === 0) {
          return (
            <div key={categoria.id}>
              <BannerMain
                videoTitle={dadosIniciais[0].videos[0].titulo}
                url={dadosIniciais[0].videos[0].url}
                videoDescription={
                  'O que é Front-end? Trabalhando na área os termos HTML, CSS e JavaScript fazem parte da rotina das desenvolvedoras e desenvolvedores. Mas o que eles fazem, afinal? Descubra com a Vanessa!'
                }
              />

              <Carousel ignoreFirstVideo category={dadosIniciais[0]} />
            </div>
          );
        }
        return (
          <Carousel
            key={`${categoria.id}  ${categoria.name}`}
            category={categoria}
          />
        );
      })}
    </PageDefault>
  );
}

export default Home;
