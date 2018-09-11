import React from 'react';
import { shallow } from 'enzyme';
import Categories from '../components/Categories';
import CategoryButton from '../components/CategoryButton';

test('Categories renders correctly with sample props', () => {
  const wrapper = shallow(<Categories categories={['Food', 'Home', 'Travel']} activeCategory={'Home'} />);
  expect(wrapper).toMatchSnapshot();
});

test('Categories renders with correct number of CategoryButton children', () => {
  const categories = ['t1', 't2', 't3'];
  const wrapper = shallow(<Categories categories={categories} />);
  expect(wrapper.find(CategoryButton).length).toBe(categories.length);
});

test('Categories renders with correct CategoryButton names', () => {
  const categories = ['t1', 't2', 't3'];
  const wrapper = shallow(<Categories categories={categories} />);
  const categoryButtons = wrapper.find(CategoryButton);
  categoryButtons.forEach((categoryButton, i) => {
    expect(categoryButton.prop('label')).toBe(categories[i]);
  });
});

test('Categories with activeCategory=false creates children CategoryButton with isActive=false', () => {
  const categories = ['t1', 't2', 't3'];
  const wrapper = shallow(<Categories categories={categories} />);
  const categoryButtons = wrapper.find(CategoryButton);
  categoryButtons.forEach(categoryButton => {
    let { isActive } = categoryButton.props();
    expect(isActive).toBe(false);
  });
});

test('Categories with activeCategory creates children CategoryButton with correct isActive props', () => {
  const activeCategory = 't3';
  const categories = ['t1', 't2', 't3'];
  const wrapper = shallow(<Categories categories={categories} activeCategory={activeCategory} />);
  const categoryButtons = wrapper.find(CategoryButton);
  categoryButtons.forEach(categoryButton => {
    let { label, isActive } = categoryButton.props();
    if (label === activeCategory)
      expect(isActive).toBe(true);
    else
      expect(isActive).toBe(false);
  });
});
