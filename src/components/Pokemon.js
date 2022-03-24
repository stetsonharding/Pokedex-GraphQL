import React from "react";

function Pokemon({ pokemon }) {
  return (
    <div className="pokemon">
      <h2>{pokemon.name}</h2>
      <div className="pokemon-details">
        <h4>{pokemon.maxHP}</h4>
        <h4>{pokemon.maxCP}</h4>
      </div>
      <div className="pokemon-image">
        <img src={pokemon.image} alt="pokemeon" />
      </div>
      <div className="pokemon-attacks">
        <p>Attack 1</p>
        <p>Attack 2</p>
        <p>Attack 3</p>
      </div>
    </div>
  );
}

export default Pokemon;
