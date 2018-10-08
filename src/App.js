import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

import HeaderNavbar from './components/HeaderNavbar';
import Categories from './components/Categories';
import Alerts from './components/Alerts';
import Footer from './components/Footer';
import Archive from './components/Archive';

import 'bootstrap';
import './styles/main.scss';

import blogPosts from './tests/fixtures/blogPosts';

const App = () => (
  <div>
    <HeaderNavbar />
    <Categories categories={['Food', 'Home', 'Travel', 'Sports']} activeCategory='Travel' />
    <Alerts alerts={[
      {type: 'success', text: 'Test alert 1'},
      {type: 'danger', text: 'Test alert 2'}
    ]} />
    <Archive blogPosts={blogPosts} />
    <Footer />
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));
