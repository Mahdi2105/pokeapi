import { Search } from "@mui/icons-material";
import { Divider, IconButton, InputBase, Paper } from "@mui/material";
import { useState } from "react";

function SearchBar(props) {
  const { setSearch } = props;

  const [currSearch, sertCurrSearch] = useState("");

  function handleChange(event) {
    sertCurrSearch(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSearch(currSearch);
    sertCurrSearch("");
  }

  return (
    <div className="search-bar">
      <Paper
        component="form"
        onSubmit={handleSubmit}
        sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400 }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search Pokemon"
          inputProps={{ "aria-label": "search pokemon" }}
          onChange={handleChange}
          value={currSearch}
        />
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <IconButton
          onClick={handleSubmit}
          type="button"
          sx={{ p: "10px" }}
          aria-label="search"
        >
          <Search />
        </IconButton>
      </Paper>
    </div>
  );
}

export default SearchBar;
