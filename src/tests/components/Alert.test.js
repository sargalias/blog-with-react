import React from 'react';
import { shallow } from 'enzyme'
import Alert from '../../components/Alert';

test('alert should render correctly with no props', () => {
  const wrapper = shallow(<Alert />);
  expect(wrapper).toMatchSnapshot();
});

test('alert should render correctly with props', () => {
  const text = 'Test';
  const type = 'success';
  const wrapper = shallow(<Alert text={text} type={type} />);
  expect(wrapper).toMatchSnapshot();
});

test('alert should use its text prop correctly', () => {
  const text = "Test";
  const matcher = /^Test/;
  const wrapper = shallow(<Alert text={text} />);
  expect(wrapper.text()).toMatch(matcher);
});

test('alert should use its type prop properly', () => {
  const type = 'test';
  const wrapper = shallow(<Alert type={type} />);
  expect(wrapper.hasClass(`alert-${type}`)).toBe(true);
});
