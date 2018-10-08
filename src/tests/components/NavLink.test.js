import React from 'react';
import {shallow} from 'enzyme';
import NavLink from '../../components/NavLink';

test('NavLink should render correctly with no props', () => {
  const wrapper = shallow(<NavLink />);
  expect(wrapper).toMatchSnapshot();
});

test('NavLink should render correctly with props and isActive false', () => {
  const wrapper = shallow(<NavLink link='/test' label='test' isActive={false} />);
  expect(wrapper).toMatchSnapshot();
});

test('NavLink should render correctly with props and isActive false', () => {
  const wrapper = shallow(<NavLink link='/test' label='test' isActive={true} />);
  expect(wrapper).toMatchSnapshot();
});

test('NavLink has correct label', () => {
  const label = 'test text';
  const re = new RegExp(label);
  const wrapper = shallow(<NavLink label={label} />);
  expect(wrapper.text()).toMatch(re);
});

test('NavLink is set correctly when isActive=true', () => {
  const isActive = true;
  const expected = ' (current)';
  const wrapper = shallow(<NavLink isActive={isActive} />);
  expect(wrapper.text()).toBe(expected);
});

test('NavLink is set correctly when isActive=false', () => {
  const isActive = false;
  const expected = ' ';
  const wrapper = shallow(<NavLink isActive={isActive} />);
  expect(wrapper.text()).toBe(expected);
});
