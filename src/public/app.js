const buildMenuItem = (rover) => `<li id='${rover.name}'><a href='#'>${rover.name}</a></li>`;

const wrapperMenu = (menuItemList) => `<ul>${menuItemList.join('')}</ul>`;

const buildMenu = (state) => {
  const menuItems = state.rovers.reduce((menu, rover) => {
    menu.push(buildMenuItem(rover));
    return menu;
  }, []);
  return wrapperMenu(menuItems);
};

const app = (state) => buildMenu(state);

export default app;
