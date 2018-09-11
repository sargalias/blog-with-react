import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

import HeaderNavbar from './components/HeaderNavbar';
import Categories from './components/Categories';
import 'bootstrap';
import './styles/main.scss';

const App = () => (
  <div>
    <HeaderNavbar />
    <Categories categories={['Food', 'Home', 'Travel', 'Sports']} activeCategory='Travel' />
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));
