// resume.spec.js

import React from 'react';
import {render, unmountComponentAtNode} from 'react-dom';
import {act} from 'react-dom/test-utils';

import Resume from './resume';

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

test('renders Resume ', () => {
  act(() => {
    render(<Resume />, container);
  });
  expect(container).toBeInTheDocument();
});
