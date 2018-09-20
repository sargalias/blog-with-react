import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

import HeaderNavbar from './components/HeaderNavbar';
import Categories from './components/Categories';
import Alerts from './components/Alerts';
import BlogListing from './components/BlogListing';

import sampleBlogPosts from './tests/fixtures/blogPosts';
import sampleUsers from './tests/fixtures/users';
import 'bootstrap';
import './styles/main.scss';

const App = () => (
  <div>
    <HeaderNavbar />
    <Categories categories={['Food', 'Home', 'Travel', 'Sports']} activeCategory='Travel' />
    <Alerts alerts={[
      {type: 'success', text: 'Test alert 1'},
      {type: 'danger', text: 'Test alert 2'}
    ]} />
    <BlogListing blogPost={sampleBlogPosts[0]} user={sampleUsers[0]} />
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));
