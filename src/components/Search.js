import React from "react";

function Search({ searchQuery, setSearchQuery }) {
  return (
    <div className="search-container">
      <form className="form-container">
        <input
          className="search-input"
          type="search"
          placeholder="Search Pokemons"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </form>
    </div>
  );
}

export default Search;
