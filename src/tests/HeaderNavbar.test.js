import React from 'react';
import { shallow } from 'enzyme';
import HeaderNavbar from '../components/HeaderNavbar';

test('HeaderNavbar should render correctly', () => {
  const wrapper = shallow(<HeaderNavbar />);
  expect(wrapper).toMatchSnapshot();
});
