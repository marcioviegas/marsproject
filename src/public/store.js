import Immutable from 'immutable';

const store = (callback) => {
  let state = Immutable.Map();

  return (action) => {
    switch (action.type) {
      case ('ADD_ROVERS'):
        state = state.set('rovers', Immutable.List(action.data.map((r) => Immutable.Map(r))));
        break;
      default: break;
    }

    callback(state.toJS());

    return state.toJS();
  };
};

export default store;
