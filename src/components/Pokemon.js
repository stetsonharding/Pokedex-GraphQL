import React from "react";

function Pokemon() {
  return (
    <div className="pokemon">
      <h2>Name</h2>
      <div className="pokemon-details">
        <h4>hitpoints</h4>
        <h4>Critpoints</h4>
      </div>
      <div className="pokemon-image">
        <img alt="pokemeon" />
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
