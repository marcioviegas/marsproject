const normalizeKey = (key) => key.split('_').map((i) => i[0].toUpperCase() + i.slice(1)).join(' ');

const wrapperMenu = (menuItemList) => `<ul id='menu'>${menuItemList.join('')}</ul>`;

const buildMenuItem = (rover) => `<li><a href='#' class='rover' id='${rover.name}'>${rover.name}</a></li>`;

const buildMenuSection = (state) => {
  const menuItems = state.rovers.reduce((menu, rover) => {
    menu.push(buildMenuItem(rover));
    return menu;
  }, []);
  return wrapperMenu(menuItems);
};

const buildRoverPhotos = (rover) => `<img src="${rover.photos[0].img_src}" width="100%" />`;

const buildRoverInfo = (rover) => Object.keys(rover).filter((k) => k !== 'photos').reduce((info, key) => `${info}<p>${normalizeKey(key)}: ${rover[key]}</p>`, '');

const buildRoverSection = (state) => {
  if (!state.active) return '<p>Please select a Rover</p>';

  const activatedRover = state.rovers.find((rover) => rover.name === state.active);

  const roverInfo = buildRoverInfo(activatedRover);

  const roverPhotos = buildRoverPhotos(activatedRover);

  return roverInfo + roverPhotos;
};

const app = (state) => {
  const menu = buildMenuSection(state);

  const content = buildRoverSection(state);

  return { menu, content };
};

export default app;
