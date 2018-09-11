import React from 'react';
import { shallow } from 'enzyme';
import Alerts from '../components/Alerts';

test('Alerts should not render without alerts prop', () => {
  const wrapper = shallow(<Alerts />);
  expect(wrapper.html()).toBeNull();
});

test('Alerts should render correctly with one alert', () => {
  const alerts = [
    { type: 'danger', text: 'test' }
  ];
  const wrapper = shallow(<Alerts alerts={alerts} />);
  expect(wrapper).toMatchSnapshot();
});

test('Alerts should render correctly with two alerts', () => {
  const alerts = [
    { type: 'danger', text: 'test' },
    { type: 'success', text: 'test 2' }
  ];
  const wrapper = shallow(<Alerts alerts={alerts} />);
  expect(wrapper).toMatchSnapshot();
});
