import React from "react";
import "../css/Pagination.css";

function Pagination({ pokemonsPerPage, totalPokemons, paginate, currentPage }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPokemons / pokemonsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="nav-container">
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={`${number === currentPage ? "active" : "page-item"}`}
          >
            <a onClick={() => paginate(number)} className="page-link" href="!#">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Pagination;
