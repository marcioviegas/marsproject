import render from './render.js';

const root = document.getElementById('root');

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
