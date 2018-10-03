import React from 'react';
import { shallow } from 'enzyme';
import BlogListings from '../components/BlogListings';
import blogPosts from './fixtures/blogPosts';

describe('BlogListings', () => {
  test.skip('Should render correctly without props', () => {
    const wrapper = shallow(<BlogListings />);
    expect(wrapper).toMatchSnapshot();
  });

  test.skip('Should render correctly with props', () => {
    const wrapper = shallow(<BlogListings blogPosts={blogPosts} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('Should be empty with no props', () => {
    const wrapper = shallow(<BlogListings />);
    expect(wrapper.html()).toBeNull();
  });

  test('Should be empty with prop blogPosts=[]', () => {
    const wrapper = shallow(<BlogListings blogPosts={[]} />);
    expect(wrapper.html()).toBeNull();
  });

  test('Should be non-empty with props', () => {
    const wrapper = shallow(<BlogListings blogPosts={blogPosts} />);
    expect(wrapper.html()).toBeTruthy();
  });

  test('Should have correct number of BlogListing children', () => {

  });

  test('Should call BlogListing children with correct props', () => {

  });
});
