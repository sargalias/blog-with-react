import React from 'react';
import { shallow } from 'enzyme';
import Footer from '../components/Footer';
import moment from 'moment';

test('Footer should render correctly', () => {
  const wrapper = shallow(<Footer />);
  expect(wrapper).toMatchSnapshot();
});
