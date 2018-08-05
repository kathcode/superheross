import React, { Fragment } from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

// Redux
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';

import reducers from './reducers';
import List from './views/List/List';
import Ranking from './views/Ranking/Ranking';

// Redux configuration
const middleware = [thunk];
const store = createStore(
  reducers,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  ),
);

render(
  <Fragment>
    <Router basename="/">
      <Provider store={store}>
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
      </Provider>
    </Router>
  </Fragment>,
  document.getElementById('root')
);
