import store from './store.js';
import app from './app.js';
import getRovers from './api.js';

const render = (state) => {
  const root = document.getElementById('root');
  root.innerHTML = app(state);
  console.log(state);
};

const updateStore = store(render, Immutable);

const menuListener = (event) => {
  const element = event.target;

  if (element.className === 'rover') {
    updateStore({ type: 'ACTIVE_ROVER', data: element.id });
  }
};

(() => {
  window.addEventListener('load', () => {
    getRovers().then((responseData) => {
      updateStore({ type: 'ADD_ROVERS', data: responseData.rovers });
    });
  });

  document.addEventListener('click', menuListener);
})();
