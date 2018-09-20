import React from 'react';
import moment from 'moment';
import { shallow } from 'enzyme';
import BlogListing from '../components/BlogListing';
import blogPosts from './fixtures/blogPosts';
import users from './fixtures/users';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<BlogListing blogPost={blogPosts[0]} user={users[0]}/>);
});

test('BlogListing should render correctly with props', () => {
  expect(wrapper).toMatchSnapshot();
});

test('BlogListing should render empty with no props', () => {
  const wrapper = shallow(<BlogListing />);
  expect(wrapper).toMatchSnapshot();
});

test('BlogListing should be empty with no props', () => {
  const wrapper = shallow(<BlogListing />);
  expect(wrapper.html()).toBeNull();
});

test('BlogListing should have the correct post title', () => {
  expect(wrapper.find('h3').text()).toBe(blogPosts[0].title);
});

test('BlogListing should have the correct image', () => {
  const re = new RegExp(`src="${blogPosts[0].imageURL}"`);
  expect(wrapper.find('img').html()).toMatch(re);
});

test('BlogListing should have the correct excerpt', () => {
  expect(wrapper.find('p').text()).toBe(blogPosts[0].excerpt);
});

test('BlogListing excerpt section should have no HTML with no excerpt', () => {
  const blogPost = {
    ...blogPosts[0],
    excerpt: ''
  };
  const wrapper = shallow(<BlogListing blogPost={blogPost} user={users[0]} />);
  expect(wrapper.find('.content #excerpt').length).toBe(0);
});

test('BlogListing should have the correct category', () => {
  expect(wrapper.find('.category-text-container').text()).toBe(blogPosts[0].category);
});

test('BlogListing should have the correct category link', () => {
  const expected = `/categories/${blogPosts[0].category.toLowerCase()}`;
  expect(wrapper.find('#category-link').render().attr('href')).toBe(expected);
});

test('BlogListing should have the correct metadata', () => {
  const metadataText = wrapper.find('.metadata').text();
  const expectedText = `Published by ${users[0].displayName} at ${moment(blogPosts[0].date).format('DD/MM/YYYY')}`;
  expect(metadataText).toBe(expectedText);

  const userLink = wrapper.find('#userLink');
  expect(userLink.render().attr('href')).toBe(`/users/${users[0].id}`);
});

test('BlogListing image, title and Read More correctly link to the post', () => {
  const expected = `/posts/${blogPosts[0].postId}`;

  const imgLinkWrapper = wrapper.find('#image-link');
  const titleLinkWrapper = wrapper.find('#post-title-link');
  const readMoreLinkWrapper = wrapper.find('#read-more-link');

  expect(imgLinkWrapper.render().attr('href')).toBe(expected);
  expect(titleLinkWrapper.render().attr('href')).toBe(expected);
  expect(readMoreLinkWrapper.render().attr('href')).toBe(expected);
});
