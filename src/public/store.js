const store = (callback, Immutable) => {
  const states = Immutable.List();
  let state = Immutable.Map();

  return (action) => {
    switch (action.type) {
      case ('ADD_ROVERS'):
        state = state.set('rovers', Immutable.fromJS(action.data));
        break;
      case ('UPDATE_ROVER_PHOTOS'):
        state = state.set('active', action.data.rover);
        // update photos for a given rover - the price of Immutability :)
        state = state.set('rovers', state.get('rovers').update(state.get('rovers').findIndex((item) => item.get('name') === action.data.rover), (item) => item.set('photos', action.data.photos)));
        break;
      default: break;
    }

    callback(state.toJS());

    // for history - if I ever want to do it :/
    states.push(state);

    return state.toJS();
  };
};

export default store;
