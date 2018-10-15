import React from 'react';

const PaginationLink = ({ url, text }) => (
  <li className="list-item">
    <a
      className="page-link"
      href={url}
    >
      { text }
    </a>
  </li>
);

export default PaginationLink;
