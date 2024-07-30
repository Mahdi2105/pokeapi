import axios from "axios";

const pokeApi = axios.create({
  baseURL: "https://pokeapi.co/api/v2/",
});

const fetchAllPokemon = (page, itemsPerPage) => {
  const offset = (page - 1) * itemsPerPage;
  return pokeApi
    .get(`/pokemon?limit=${itemsPerPage}&offset=${offset}`)
    .then((response) => {
      return response.data;
    });
};

const fetchPokemon = (search) => {
  return pokeApi.get(`/pokemon/${search}`).then((response) => {
    return response.data;
  });
};

export { fetchAllPokemon, fetchPokemon };
