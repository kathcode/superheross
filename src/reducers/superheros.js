import superHeros from '../constants/constants';

const createReducer = (initialState, handlers) => {
  return (state = initialState, action) => {
    if (Object.prototype.hasOwnProperty.call(handlers, action.type)) {
      return handlers[action.type](state, action);
    }
    return state;
  };
};

const initialState = {
  superHeros: [],
  heroDetail: {},
};

export default createReducer(initialState, {
  /**
   * Modify the store to inform that the actual state is loading
   * @param {Object} state The actual state tree
   */
  [superHeros.LOAD_SUPERHEROS](state, action) {
    return {
      ...state,
      superHeros: action.payload,
    };
  },

  [superHeros.LOAD_HERO](state, action) {
    return {
      ...state,
      heroDetail: action.payload,
    };
  }
});

// Reference of Object.prototype.hasOwnProperty.call => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty
