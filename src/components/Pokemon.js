import React from "react";
import "../css/Pokemon.css";

function Pokemon({ pokemon }) {
  return (
    <div className="pokemon">
      <div className="pokemon-name">
        <span>{pokemon.name}</span>
      </div>
      <div className="pokemon-strength-details">
        <span>HP: {pokemon.maxHP}</span>
        <span>--</span>
        <span>CP: {pokemon.maxCP}</span>
      </div>
      <div className="pokemon-image-container">
        <img src={pokemon.image} alt="pokemeon" />
      </div>
      <div className="attack-title">
        <span>Attacks</span>
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
              <span>{attack.name}</span>
              <span>Dmg: {attack.damage}</span>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Pokemon;
