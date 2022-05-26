import React from "react";
import "../css/Pagination.css";

function Pagination({ pokemonsPerPage, totalPokemons, paginate, currentPage }) {
  const pageNumbers = [];
  //calculating total page numbers.
  for (let i = 1; i <= Math.ceil(totalPokemons / pokemonsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="nav-container">
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li
            onClick={() => paginate(number)}
            key={number}
            className={`${number === currentPage ? "active" : "page-item"}`}
          >
            <p className="page-link">{number}</p>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Pagination;
