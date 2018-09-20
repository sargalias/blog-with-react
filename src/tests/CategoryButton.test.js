import React from 'react';
import { shallow, render } from 'enzyme';
import CategoryButton from "../components/CategoryButton";

test('CategoryButton renders correctly with no props', () => {
  const wrapper = shallow(<CategoryButton />);
  expect(wrapper).toMatchSnapshot();
});

test('CategoryButton renders correctly with props', () => {
  const wrapper = shallow(<CategoryButton label='test' isActive={true} hoverColor='orange' />);
  expect(wrapper).toMatchSnapshot();
});

test('CategoryButton correctly adds hoverColor prop to inline styles', () => {
  const hoverColor = 'orange';
  const wrapper = render(<CategoryButton hoverColor={hoverColor} />);
  expect(wrapper.css('color')).toBe(hoverColor);
});

test('CategoryButton has correct label', () => {
  const label = 'test text';
  const re = new RegExp(label);
  const wrapper = render(<CategoryButton label={label} />);
  expect(wrapper.text()).toMatch(re);
});

test('CategoryButton is set correctly when isActive=true', () => {
  const isActive = true;
  const expected = ' (current)';
  const wrapper = render(<CategoryButton isActive={isActive} />);
  expect(wrapper.text()).toBe(expected);
});

test('CategoryButton is set correctly when isActive=false', () => {
  const isActive = false;
  const expected = ' ';
  const wrapper = render(<CategoryButton isActive={isActive} />);
  expect(wrapper.text()).toBe(expected);
});
