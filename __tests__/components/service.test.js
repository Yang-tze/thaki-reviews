import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import ReactDOM from 'react-dom';
import Service from '../../src/index';
// import sinon from 'sinon';

Enzyme.configure({ adapter: new Adapter() });

describe('Service', () => {
  it('should be able to run tests', () => {
    expect(2 + 2).toBe(4);
  });
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Service />, div);
  });
  // it('knows that 2 and 2 make 4', () => {
  //   expect(2 + 2).toBe(4);
  // });
  // it('knows that 2 and 2 make 4', () => {
  //   expect(2 + 2).toBe(4);
  // });
  // it('knows that 2 and 2 make 4', () => {
  //   expect(2 + 2).toBe(4);
  // });
});
