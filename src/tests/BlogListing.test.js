import React from 'react';
import moment from 'moment';
import { shallow } from 'enzyme';
import BlogListing from '../components/BlogListing';

const sampleBlogPost = {
  imageURL: 'https://via.placeholder.com/350x350',
  category: 'Food',
  title: 'Test title',
  excerpt: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est fugiat harum obcaecati pariatur sint tempore unde. Aperiam commodi distinctio earum eligendi, enim itaque laudantium magni neque porro temporibus vitae voluptatum?',
  postId: '501',
  userName: 'Test username',
  userLink: 'Test userlink',
  date: moment(0)
};
const sampleUser = {
  displayName: 'Test displayName',
  id: 1500,
};

let wrapper;

beforeEach(() => {
  wrapper = shallow(<BlogListing blogPost={sampleBlogPost} user={sampleUser}/>);
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
  expect(wrapper.find('h3').text()).toBe(sampleBlogPost.title);
});

test('BlogListing should have the correct image', () => {
  const re = new RegExp(`src="${sampleBlogPost.imageURL}"`);
  expect(wrapper.find('img').html()).toMatch(re);
});

test('BlogListing should have the correct excerpt', () => {
  expect(wrapper.find('p').text()).toBe(sampleBlogPost.excerpt);
});

test('BlogListing excerpt section should have no HTML with no excerpt', () => {
  const blogPost = {
    ...sampleBlogPost,
    excerpt: ''
  };
  const wrapper = shallow(<BlogListing blogPost={blogPost} user={sampleUser} />);
  expect(wrapper.find('.content #excerpt').length).toBe(0);
});

test('BlogListing should have the correct category', () => {
  expect(wrapper.find('.category-text-container').text()).toBe(sampleBlogPost.category);
});

test('BlogListing should have the correct metadata', () => {
  const metadataText = wrapper.find('.metadata').text();
  const expectedText = `Published by ${sampleUser.displayName} at ${moment(sampleBlogPost.date).format('DD/MM/YYYY')}`;
  expect(metadataText).toBe(expectedText);

  const userLink = wrapper.find('#userLink');
  expect(userLink.render().attr('href')).toBe(`/users/${sampleUser.id}`);
});

test('BlogListing image, title and Read More correctly link to the post', () => {
  const expected = `/posts/${sampleBlogPost.postId}`;

  const imgLinkWrapper = wrapper.find('#image-link');
  const titleLinkWrapper = wrapper.find('#post-title-link');
  const readMoreLinkWrapper = wrapper.find('#read-more-link');

  expect(imgLinkWrapper.render().attr('href')).toBe(expected);
  expect(titleLinkWrapper.render().attr('href')).toBe(expected);
  expect(readMoreLinkWrapper.render().attr('href')).toBe(expected);
});
