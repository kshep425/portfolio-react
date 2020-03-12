import React from 'react';
import {render, unmountComponentAtNode} from 'react-dom';
import {act} from 'react-dom/test-utils';

import Navbar from './Navbar';

let container = null;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

test('renders Navbar ', () => {
  act(() => {
    render(<Navbar />, container);
  });
  expect(container).toBeInTheDocument();
});
