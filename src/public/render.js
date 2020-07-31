const render = (_root, state) => {
  _root.innerHTML = JSON.stringify(state);
};

export default render;
