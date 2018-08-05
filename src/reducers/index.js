import { combineReducers } from 'redux';

import superhero from './superheros';

const rootReducer = combineReducers({
  superhero,
});

export default rootReducer;
