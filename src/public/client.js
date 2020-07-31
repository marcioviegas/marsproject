import store from './store.js';
import app from './app.js';
import getRovers from './api.js';

const render = (state) => {
  const root = document.getElementById('root');
  root.innerHTML = app(state);
};

const updateStore = store(render);

const menuListener = (event) => {
  const element = event.target;
  updateStore({ action: 'ACTIVE_ROVER', data: element.id });
};

(() => {
  window.addEventListener('load', () => {
    getRovers().then((responseData) => {
      updateStore({ type: 'ADD_ROVERS', data: responseData.rovers });
    });
  });

  document.addEventListener('click', menuListener);
})();
