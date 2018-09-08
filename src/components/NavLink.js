import React from 'react';

const NavLink = ({link, label, isActive=false}) => (
  <li className={`nav-item ${isActive && 'active'}`}>
    <a
      className="nav-link"
      href={link}
    >
      {label} {isActive && <span className="sr-only">(current)</span>}
    </a>
  </li>
);

export default NavLink;
