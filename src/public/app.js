const buildMenuItem = (rover) => `<li><a href='#' id='${rover.name}'>${rover.name}</a></li>`;

const wrapperMenu = (menuItemList) => `<ul id='menu'>${menuItemList.join('')}</ul>`;

const buildMenu = (state) => {
  const menuItems = state.rovers.reduce((menu, rover) => {
    menu.push(buildMenuItem(rover));
    return menu;
  }, []);
  return wrapperMenu(menuItems);
};

const app = (state) => buildMenu(state);

export default app;
