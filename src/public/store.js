/* eslint-disable no-undef */
/* eslint-disable no-param-reassign */

const store = (callback) => {
  let state = Immutable.Map();

  return (action) => {
    switch (action.type) {
      case ('UPDATE_ROVERS'):
        state = state.set('rovers', Immutable.List(action.data));
        break;
      default: break;
    }

    callback(state.toJS());

    return state;
  };
};

export default store;
