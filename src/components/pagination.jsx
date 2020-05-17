import React from "react";

const Pagination = ({
  moviesPerPage,
  totalMovies,
  pagination,
  previousPage,
  nextPage,
  currentPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalMovies / moviesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="paginaton-container">
      <a onClick={() => previousPage()} href="#!">
        previous
      </a>
      {pageNumbers.map((number) => (
        <a
          className={currentPage === number ? "active" : ""}
          onClick={() => pagination(number)}
          href="#!"
        >
          {number}
        </a>
      ))}
      <a onClick={() => nextPage()} href="#!">
        next
      </a>
    </div>
  );
};

export default Pagination;
