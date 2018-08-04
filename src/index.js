import React, { Fragment } from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import List from './views/List/List';
import Ranking from './views/Ranking/Ranking';

render(
  <Fragment>
    <Router basename="/">
      <Switch>
        <Route
          path="/"
          exact
          component={List}
        />
        <Route
          path="/ranking"
          exact
          component={Ranking}
        />
      </Switch>
    </Router>
  </Fragment>,
  document.getElementById('root')
);
