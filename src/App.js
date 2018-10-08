import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

import HeaderNavbar from './components/HeaderNavbar';
import Categories from './components/Categories';
import Alerts from './components/Alerts';
import BlogListings from './components/BlogListings';
import Footer from './components/Footer';

import sampleBlogPosts from './tests/fixtures/blogPosts';
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
    <BlogListings blogPosts={sampleBlogPosts} />
    <Footer />
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));
