import React from "react";

function Search({ handleQuerySearch, searchQuery }) {
  return (
    <div className="search-container">
      <form className="form-container">
        <input
          className="search-input"
          type="search"
          placeholder="Search Pokemons"
          value={searchQuery}
          onChange={handleQuerySearch}
        />
      </form>
    </div>
  );
}

export default Search;
