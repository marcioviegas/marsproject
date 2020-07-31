const normalizeKey = (key) => key.split('_').map((i) => i[0].toUpperCase() + i.slice(1)).join(' ');

const wrapperSection = (content) => `<section>${content}</section>`;

const wrapperMenu = (menuItemList) => `<ul id='menu'>${menuItemList.join('')}</ul>`;

const buildMenuItem = (rover) => `<li><a href='#' class='rover' id='${rover.name}'>${rover.name}</a></li>`;

const buildMenuSection = (state) => {
  const menuItems = state.rovers.reduce((menu, rover) => {
    menu.push(buildMenuItem(rover));
    return menu;
  }, []);
  return wrapperSection(wrapperMenu(menuItems));
};

const buildRoverInfo = (rover) => Object.keys(rover).reduce((info, key) => `${info}<p>${normalizeKey(key)}: ${rover[key]}</p>`, '');

const buildRoverSection = (state) => {
  if (!state.active) return wrapperSection('<p>Please select a Rover</p>');

  return wrapperSection(buildRoverInfo(state.rovers.find((rover) => rover.name === state.active)));
};

const app = (state) => {
  const menu = buildMenuSection(state);

  const roverSection = buildRoverSection(state);

  return menu + roverSection;
};

export default app;
