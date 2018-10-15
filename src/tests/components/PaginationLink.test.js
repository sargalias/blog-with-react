import React from 'react';
import { shallow } from 'enzyme';
import PaginationLink from '../../components/PaginationLink';

test('PaginationLink should render correctly', () => {
  const wrapper = shallow(<PaginationLink url="testLink" text="testText" />);
  expect(wrapper).toMatchSnapshot();
});

test('PaginationLink should correctly use its url and text props', () => {
  const url = 'testUrl';
  const text = 'text text';
  const wrapper = shallow(<PaginationLink url={url} text={text} />);
  expect(wrapper.render().children('a').attr('href')).toBe(url);
  expect(wrapper.text()).toBe(text);
});
