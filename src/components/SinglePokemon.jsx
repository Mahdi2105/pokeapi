import { Card, Switch } from "@mui/material";
import Stats from "./PokemonInfo/Stats";
import Abilities from "./PokemonInfo/Abilities";
import Moves from "./PokemonInfo/Moves";
import { useState } from "react";

function SinglePokemon(props) {
  const { pokemon } = props;

  const [isShiny, setIsShiny] = useState(false);
  const [isBack, setIsBack] = useState(false);

  const handleShiny = (event) => {
    setIsShiny(event.target.checked);
  };

  const handleView = (event) => {
    setIsBack(event.target.checked);
  };

  let imgSrc;

  if (isShiny && isBack) {
    imgSrc = pokemon.sprites.back_shiny;
  } else if (isShiny && !isBack) {
    imgSrc = pokemon.sprites.front_shiny;
  } else if (!isShiny && isBack) {
    imgSrc = pokemon.sprites.back_default;
  } else {
    imgSrc = pokemon.sprites.front_default;
  }

  return (
    <div>
      <div>
        <h2>{pokemon.name.toUpperCase()}</h2>
      </div>

      <div className="single-pokemon">
        <Card sx={{ backgroundColor: "#69A297" }}>
          <div className="pokemon-top">
            <div>
              <h3>Shiny</h3>
              <Switch
                inputProps={{ colour: "#50808e" }}
                onChange={handleShiny}
              />
            </div>
            <img src={imgSrc} />
            <div>
              <h3>Front/Back</h3>
              <Switch
                inputProps={{ colour: "#50808e" }}
                onChange={handleView}
              />
            </div>
          </div>

          <Stats stats={pokemon.stats} />
          <Abilities abilities={pokemon.abilities} />
          <Moves moves={pokemon.moves} />
        </Card>
      </div>
    </div>
  );
}

export default SinglePokemon;
