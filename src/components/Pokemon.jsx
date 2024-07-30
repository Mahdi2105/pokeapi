import { Card } from "@mui/material";
import { fetchPokemon } from "../../api";

function Pokemon(props) {
  const { pokemon, setPokemon, setTotalItems } = props;

  const handleCardClick = (name) => {
    fetchPokemon(name).then((singleData) => {
      setTotalItems(1);
      setPokemon(singleData);
    });
  };

  return (
    <div>
      <h2>POKEMON</h2>
      <div className="result-area">
        {pokemon.map((pokemon) => {
          return (
            <Card
              sx={{ backgroundColor: "#A3C9A8" }}
              className="single-item"
              key={pokemon.name}
              onClick={() => handleCardClick(pokemon.name)}
            >
              <p>{pokemon.name}</p>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

export default Pokemon;
