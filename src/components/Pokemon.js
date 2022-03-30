import React from "react";
import "../css/Pokemon.css";

function Pokemon(props) {
  return (
    <div className="pokemon">
      <div className="pokemon-name">
        <span>{props.name}</span>
      </div>
      <div className="pokemon-strength-details">
        <span>HP: {props.maxHP}</span>
        <span>--</span>
        <span>CP: {props.maxCP}</span>
      </div>
      <div className="pokemon-image-container">
        <img src={props.image} alt="pokemeon" />
      </div>
      <div className="attack-title">
        <span>Attacks</span>
      </div>
      <div className="pokemon-attacks-container">
        {/* If pokemon and pokemon attacks is not null cut the array to only display 3 special attacks */}
        {props.attacks.special.slice(0, 3).map((attack) => (
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
