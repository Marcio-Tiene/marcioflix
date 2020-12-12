import config from '../config';

const URL_CATEGORIES = `${config.URL}/categorias`;
async function getAll() {
  return fetch(`${URL_CATEGORIES}`).then(async (respostaDoServidor) => {
    if (respostaDoServidor.ok) {
      const resposta = await respostaDoServidor.json();
      return resposta;
    }

    throw new Error('Não foi possível pegar os dados');
  });
}
async function getAllWithVideos() {
  return await fetch(`${URL_CATEGORIES}?_embed=videos`).then(
    async (respostaDoServidor) => {
      if (respostaDoServidor.ok) {
        const resposta = await respostaDoServidor.json();

        return resposta;
      } else {
        throw new Error('Não foi possível pegar os dados');
      }
    }
  );
}
async function create(objetoDaCategoria) {
  return fetch(URL_CATEGORIES, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(objetoDaCategoria),
  }).then(async (respostaDoServidor) => {
    if (respostaDoServidor.ok) {
      const resposta = await respostaDoServidor.json();
      return resposta;
    }

    throw new Error('Não foi possível pegar os dados');
  });
}

export default {
  getAllWithVideos,
  getAll,
  create,
};
