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
