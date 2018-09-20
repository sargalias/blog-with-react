import React from 'react';
import { shallow } from 'enzyme';
import Categories from '../components/Categories';
import CategoryButton from '../components/CategoryButton';

const categories = ['Food', 'Home', 'Travel', 'Sports'];

test('Categories renders correctly with no props', () => {
  const wrapper = shallow(<Categories />);
  expect(wrapper).toMatchSnapshot();
});

test('Categories renders correctly with sample props', () => {
  const wrapper = shallow(<Categories categories={categories} activeCategory={'Home'} />);
  expect(wrapper).toMatchSnapshot();
});

test('Categories sets up no CategoryButtons with no categories passed in', () => {
  const wrapper = shallow(<Categories />);
  expect(wrapper.find('CategoryButton').length).toBe(0);
});

test('Categories correctly sets up CategoryButtons with categories passed in and no active category', () => {
  const wrapper = shallow(<Categories categories={categories} />);
  wrapper.find('CategoryButton').forEach((cb, i) => {
    const {label, isActive} = cb.props();
    expect(label).toBe(categories[i]);
    expect(isActive).toBe(false);
  });
});

test('Categories correctly sets up CategoryButtons with categories and active category', () => {
  const activeCategoryIndex = 2;
  const wrapper = shallow(<Categories categories={categories} activeCategory={categories[2]} />);
  wrapper.find('CategoryButton').forEach((cb, i) => {
    const {label, isActive} = cb.props();
    expect(label).toBe(categories[i]);
    expect(isActive).toBe(activeCategoryIndex === i);
  });
});
