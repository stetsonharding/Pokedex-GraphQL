import React from "react";

function Pokemon({ pokemon }) {
  return (
    <div className="pokemon">
      <p>{pokemon.name}</p>
      <div className="pokemon-details">
        <span>HP: {pokemon.maxHP}</span>
        <span>CP: {pokemon.maxCP}</span>
      </div>
      <div className="pokemon-image">
        <img src={pokemon.image} alt="pokemeon" />
      </div>
      <div className="pokemon-attacks-container">
        {/* If pokemon and pokemon attacks is not null cut the array to only display 3 special attacks */}
        {pokemon &&
          pokemon.attacks &&
          pokemon.attacks.special.slice(0, 3).map((attack) => (
            <div
              key={`${attack.name}-${attack.damage}`}
              className="pokemon-attacks"
            >
              <p>Attacks</p>
              <span>{attack.name}</span>
              <br />
              <span>Dmg: {attack.damage}</span>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Pokemon;
