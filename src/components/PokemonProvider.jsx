import { useEffect, useState } from "react";
import Pokemon from "./Pokemon";
import { fetchAllPokemon, fetchPokemon } from "../../api";
import { Pagination } from "@mui/material";
import Loading from "./Loading";
import SinglePokemon from "./SinglePokemon";

function PokemonProvider(props) {
  const { search } = props;

  const [pokemon, setPokemon] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [totalItems, setTotalItems] = useState(0);

  const itemsPerPage = 40;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  useEffect(() => {
    setIsLoading(true);
    if (search === "pokemon/" || search === "") {
      fetchAllPokemon(currentPage, itemsPerPage).then((data) => {
        setTotalItems(data.count);
        setPokemon(data.results);
      });
    } else {
      fetchPokemon(search)
        .then((singleData) => {
          setTotalItems(1);
          setPokemon(singleData);
        })
        .catch((err) => {
          setIsError(true);
          console.log(err, "err HERE");
        });
    }

    setIsLoading(false);
  }, [search, currentPage]);

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  if (isLoading) {
    return (
      <div className="main-content">
        <Loading />
      </div>
    );
  }

  if (totalItems === 1) {
    return (
      <div className="main content">
        <SinglePokemon pokemon={pokemon} />
      </div>
    );
  }

  if (isError) {
    return <h1>An ERROR has occured</h1>;
  }

  return (
    <div className="main-content">
      <div className="poke-block">
        <Pokemon
          pokemon={pokemon}
          setTotalItems={setTotalItems}
          setPokemon={setPokemon}
        />
      </div>
      <div className="page-bar">
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
          shape="rounded"
          size="large"
          showFirstButton
          showLastButton
        />
      </div>
    </div>
  );
}

export default PokemonProvider;
