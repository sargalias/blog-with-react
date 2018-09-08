import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

import HeaderNavbar from './components/HeaderNavbar';
import 'bootstrap';
import './styles/main.scss';

const App = () => (
  <div>
    <HeaderNavbar />
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));
