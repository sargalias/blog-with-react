import React from 'react';
import { shallow } from 'enzyme';
import Archive from '../../components/Archive';
import blogPosts from '../fixtures/blogPosts';

test('Archive should render correctly with no blog posts', () => {
  const wrapper = shallow(<Archive />);
  expect(wrapper).toMatchSnapshot();
});

test('Archive should render correctly with blog posts', () => {
  const wrapper = shallow(<Archive blogPosts={blogPosts} />);
  expect(wrapper).toMatchSnapshot();
});

test('Archive calls BlogListings correctly with blog posts', () => {
  const wrapper = shallow(<Archive blogPosts={blogPosts} />);
  const blogListings = wrapper.find('BlogListings');
  expect(blogListings.props().blogPosts).toEqual(blogPosts);
});

test('Archive calls blogListings correctly with no blog posts', () => {
  const wrapper = shallow(<Archive />);
  const blogListings = wrapper.find('BlogListings');
  expect(blogListings.props().blogPosts).toBe(undefined);
});
