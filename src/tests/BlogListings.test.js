import React from 'react';
import { shallow } from 'enzyme';
import BlogListings from '../components/BlogListings';
import blogPosts from './fixtures/blogPosts';

describe('BlogListings', () => {
  test('Should render correctly without props', () => {
    const wrapper = shallow(<BlogListings />);
    expect(wrapper).toMatchSnapshot();
  });

  test('Should render correctly with props', () => {
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
    const length = 3;
    const wrapper = shallow(<BlogListings blogPosts={blogPosts.slice(0, length)} />);
    expect(wrapper.find('BlogListing').length).toBe(3);
  });

  test('Should call BlogListing children with correct props', () => {
    const legnth = 3;
    const wrapper = shallow(<BlogListings blogPosts={blogPosts.slice(0, length)} />);
    const blogListingList = wrapper.find('BlogListing');
    blogListingList.forEach((blogListing, i) => {
      expect(blogListing.props().blogPost).toEqual(blogPosts[i]);
    });
  });
});
