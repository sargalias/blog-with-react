import React from 'react';

const CategoryButton = ({label, isActive=false, hoverColor}) => (
  <li
    className={`nav-item ${isActive && 'active'}`}
    style={{color: hoverColor}}
  >
    <a
      className="nav-link"
      href="/"
      onClick={(e) => e.preventDefault()}
    >
      {label} {isActive && <span className="sr-only">(current)</span>}
    </a>
  </li>
);

export default CategoryButton;
