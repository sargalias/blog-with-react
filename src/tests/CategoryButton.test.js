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
