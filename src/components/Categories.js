import React from 'react';
import CategoryButton from './CategoryButton';

const Categories = ({ categories=[], activeCategory=null }) => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark" id="categories">
    <div className="container">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCategories"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span>All Categories</span>
        <span id="category-toggle-symbol">^</span>
      </button>

      <div className="collapse navbar-collapse" id="navbarCategories">
        <ul className="navbar-nav ml-auto mr-auto">

          {/*
            Other than the surrounding HTML, this component is very basic
            and presentational only. So I left the code below in this component,
            instead of breaking it up to a different component.
          */}
          <li className="navbar-brand">Categories</li>

          { categories && categories.map(categoryLabel => (
            <CategoryButton
              label={categoryLabel}
              key={categoryLabel}
              isActive={categoryLabel === activeCategory}
              hoverColor='green'
            />)
          )}
        </ul>
      </div>
    </div>
  </nav>
);

export default Categories;
