import React from 'react';
import {shallow} from 'enzyme';
import NavLink from '../components/NavLink';

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
