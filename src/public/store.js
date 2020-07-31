import Immutable from 'immutable';

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

    return state.toJS();
  };
};

export default store;
