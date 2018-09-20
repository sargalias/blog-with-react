import React from 'react';
import moment from 'moment';
import { shallow } from 'enzyme';
import BlogListing from '../components/BlogListing';

const sampleBlogPost = {
  img: 'https://plaholder.it/350x350',
  category: 'Food',
  title: 'Test title',
  excerpt: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est fugiat harum obcaecati pariatur sint tempore unde. Aperiam commodi distinctio earum eligendi, enim itaque laudantium magni neque porro temporibus vitae voluptatum?',
  postLink: '/test-link',
  userName: 'Test username',
  userLink: 'Test userlink',
  date: moment(0)
};

test('BlogListing should render correctly with props', () => {
  const wrapper = shallow(<BlogListing blogPost={sampleBlogPost} />);
  expect(wrapper).toMatchSnapshot();
});

test('BlogListing should render empty with no props', () => {
  const wrapper = shallow(<BlogListing />);
  expect(wrapper).toMatchSnapshot();
});

test('BlogListing should have the correct post title', () => {
  const wrapper = shallow(<BlogListing blogPost={sampleBlogPost} />);
  expect(wrapper.find('h3').text()).toBe(sampleBlogPost.title);
});
