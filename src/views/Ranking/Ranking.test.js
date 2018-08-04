import React from 'react';
import ReactDOM from 'react-dom';
import Ranking from './Ranking';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Ranking />, div);
  ReactDOM.unmountComponentAtNode(div);
});
