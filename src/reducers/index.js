import { combineReducers } from 'redux';

import superHeros from './superheros';

const rootReducer = combineReducers({
  superHeros,
});

export default rootReducer;
