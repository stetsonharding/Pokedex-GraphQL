import React from "react";

function FilterPokemons({ filterPokemons }) {
  return (
    <div className="select-container" style={{ margin: "15px 20px" }}>
      <select id="pokemons" onChange={(e) => filterPokemons(e.target.value)}>
        <option value="">Filter by type:</option>
        <option value="Normal">Normal</option>
        <option value="Fire">Fire</option>
        <option value="Water">Water</option>
        <option value="Electric">Electric</option>
        <option value="Grass">Grass</option>
        <option value="Ice">Ice</option>
        <option value="Fighting">Fighting</option>
        <option value="Poison">Poison</option>
        <option value="Ground">Ground</option>
        <option value="Flying">Flying</option>
        <option value="Psychic">Psychic</option>
        <option value="Bug">Bug</option>
        <option value="Rock">Rock</option>
        <option value="Ghost">Ghost</option>
        <option value="Dragon">Dragon</option>
        <option value="Dark">Dark</option>
        <option value="Steel">Steel</option>
        <option value="Fairy">Fairy</option>
      </select>
    </div>
  );
}

export default FilterPokemons;
