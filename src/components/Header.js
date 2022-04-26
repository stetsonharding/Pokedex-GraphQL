import React from "react";
import "../css/Header.css";

import PokemonLogo from "../Assets/PokemonLogo.png";
import Search from "./Search";

function Header({ handleQuerySearch, searchQuery }) {
  return (
    <div className="header-container">
      <div className="header-image-container">
        <img src={PokemonLogo} alt="Pokemon Logo" />
      </div>
      <Search handleQuerySearch={handleQuerySearch} searchQuery={searchQuery} />
    </div>
  );
}

export default Header;
