import React from "react";
import './Pagination.css'

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= 3; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <p className="pagenumbers" key={number} >
            <a className="link"  onClick={() => paginate(number)} >
              {number}
            </a>
          </p>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
