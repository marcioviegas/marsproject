/* eslint-disable no-undef */

const root = document.getElementById('root');

const render = async (_root, state) => {
  _root.innerHTML = JSON.stringify(state);
};

const updateStore = (state, action) => {
  let newState;

  switch (action.type) {
    case ('UPDATE_ROVERS'):
      newState = state.set('rovers', Immutable.List(action.data));
      break;
    default: break;
  }

  render(root, newState.toJS());
};

const getRovers = () => fetch('http://localhost:3000/rovers').then((res) => res.json());

window.addEventListener('load', () => {
  getRovers().then((responseData) => {
    updateStore(Immutable.Map(), { type: 'UPDATE_ROVERS', data: responseData.rovers });
  });
});
