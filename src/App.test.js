import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import TestRenderer from 'react-test-renderer';

import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

const testRenderer = TestRenderer.create(<App />)
const testInstance = testRenderer.root
const state = testInstance.instance

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('TEST BUTTON', () => {
  const bt = testInstance.findByType('button').props.onClick()
  expect(state.state.count === 2)
  expect(testInstance.findByProps({id: 'counter'}).children) === (state.state.count)
  // expect(testInstance.findByProps({id: 'btn-test-add'}).children).toEqual(state.state.count)
})

it('TSET NUMBER2 ', () => {
  const wrapper = shallow(<App />)
  expect(wrapper.find('#btn-test-add').children().text()).toBe('CLICKMEEEE')

  expect(wrapper.find('#counter').children().text()) === (wrapper.instance().count)

})