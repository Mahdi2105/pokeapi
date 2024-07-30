import { useState } from "react";
import SearchBar from "./SearchBar";
import PokemonProvider from "./PokemonProvider";

function SearchProvider() {
  const [search, setSearch] = useState("pokemon/");
  return (
    <>
      <SearchBar setSearch={setSearch} />
      <PokemonProvider search={search} />
    </>
  );
}

export default SearchProvider;
