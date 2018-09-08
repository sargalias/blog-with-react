
import React from 'react';
import NavLink from './NavLink';


const HeaderNavbar = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light" id="navbar">
    <div className="container">
      <a className="navbar-brand text-primary" href="/">
        <div className="large">Blog</div>
        <div className="small">with React</div>
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <NavLink link='/' label='Home' isActive={true} />
          <NavLink link='/new' label='Add New' />
          <NavLink link='/404' label='404' />
          <NavLink link='/single' label='Single' />
        </ul>
        <ul className="navbar-nav ml-auto">
          <NavLink link='/dashboard' label='Dashboard' />
          <NavLink link='/login' label='Log In' />
          <NavLink link='/logout' label='Log Out' />
        </ul>
      </div>
    </div>
  </nav>
);

export default HeaderNavbar;
