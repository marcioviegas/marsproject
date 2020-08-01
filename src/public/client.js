import store from './store.js';
import app from './app.js';
import { getRovers, getPhotos } from './api.js';

const render = (state) => {
  const appRendered = app(state);

  const menu = document.getElementById('menu-container');
  menu.innerHTML = appRendered.menu;

  const content = document.getElementById('content-container');
  content.innerHTML = appRendered.content;
};

const updateStore = store(render, Immutable);

const menuListener = (event) => {
  const element = event.target;
  const roverName = element.id;

  const isHoverChangeClick = element.className === 'rover';
  if (isHoverChangeClick) {
    getPhotos(roverName).then((res) => {
      updateStore({ type: 'UPDATE_ROVER_PHOTOS', data: { rover: roverName, photos: res.photos } });
    });
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
