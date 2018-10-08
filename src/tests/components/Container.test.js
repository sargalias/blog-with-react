import React from 'react';
import Container from '../../components/Container';
import { shallow } from 'enzyme';

test('Container should be empty with no children', () => {
  const wrapper = shallow(<Container />);
  expect(wrapper.html()).toBeNull();
});

test('Container should contain contain children JSX', () => {
  const children = <div>Test HTML</div>;
  const wrapper = shallow(<Container>{ children }</Container>);
  expect(wrapper.contains(children)).toBe(true);
});

test('Container should render empty with no children', () => {
  const wrapper = shallow(<Container />);
  expect(wrapper).toMatchSnapshot();
});

test('Container should render correctly with children', () => {
  const children = <div>Test HTML</div>;
  const wrapper = shallow(<Container>{ children }</Container>);
  expect(wrapper).toMatchSnapshot();
});
