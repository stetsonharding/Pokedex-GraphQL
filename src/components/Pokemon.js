import React from "react";
import "../css/Pokemon.css";

function Pokemon(props) {
  return (
    <div
      className="pokemon"
      style={{
        //Background color based on pokemons type.
        backgroundColor: `${props.types
          .slice(0, 1)
          .map((type) =>
            type === "Normal"
              ? "#A8A77A"
              : type === "Fire"
              ? "#EE8130"
              : type === "Water"
              ? "#6390F0"
              : type === "Electric"
              ? "#F7D02C"
              : type === "Grass"
              ? "#7AC74C"
              : type === "Ice"
              ? "#96D9D6"
              : type === "Fighting"
              ? "#C22E28"
              : type === "Poison"
              ? "#A33EA1"
              : type === "Ground"
              ? "#E2BF65"
              : type === "Flying"
              ? "#A98FF3"
              : type === "Psychic"
              ? "#F95587"
              : type === "Bug"
              ? "#A6B91A"
              : type === "Rock"
              ? "#B6A136"
              : type === "Ghost"
              ? "#735797"
              : type === "Dragon"
              ? "#6F35FC"
              : type === "Dark"
              ? "#705746"
              : type === "Steel"
              ? "#B7B7CE"
              : type === "Fairy"
              ? "#D685AD"
              : "#fff"
          )}`,
      }}
    >
      <div className="pokemon-name">
        <span>{props.name}</span>
        {/* Getting the first type of the pokemon */}
        {props.types.slice(0, 1).map((type) => (
          <div key={type} className="pokemon-type">
            <span>{type}</span>
          </div>
        ))}
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
