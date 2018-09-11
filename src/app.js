import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

import HeaderNavbar from './components/HeaderNavbar';
import Categories from './components/Categories';
import Alerts from './components/Alerts';
import 'bootstrap';
import './styles/main.scss';

const App = () => (
  <div>
    <HeaderNavbar />
    <Categories categories={['Food', 'Home', 'Travel', 'Sports']} activeCategory='Travel' />
    <Alerts alerts={[
      {type: 'success', text: 'Test'},
      {type: 'danger', text: 'Test 2'},
      ]} />
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));
