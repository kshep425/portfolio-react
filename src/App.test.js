import React from 'react';
import {render} from '@testing-library/react';
import App from './App';
import {unmountComponentAtNode} from 'react-dom';

let container = null;
beforeEach(()=> {
  // setup a DOM element as a render target
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(()=> {
  // clean up on exiting
  unmountComponentAtNode(container);
  container.remove();
  container=null;
});

test('renders Resume link', () => {
  const {getByText} = render(<App />);
  const linkElement = getByText(/Resume/i);
  expect(linkElement).toBeInTheDocument();
});
