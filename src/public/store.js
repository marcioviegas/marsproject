const store = (callback, Immutable) => {
  let state = Immutable.Map();

  return (action) => {
    switch (action.type) {
      case ('ADD_ROVERS'):
        state = state.set('rovers', Immutable.List(action.data.map((r) => Immutable.Map(r))));
        break;
      case ('ACTIVE_ROVER'):
        state = state.set('active', action.data);
        break;
      default: break;
    }

    callback(state.toJS());

    return state.toJS();
  };
};

export default store;
