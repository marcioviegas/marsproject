import render from '../src/public/render';

document.body.innerHTML = "<main><div id='root'></div></main>";

const root = document.getElementById('root');

test('extractRoversInformation', () => {
  const a = { a: 'b' };
  render(root, a);
  expect(root.innerHTML).toBe(JSON.stringify(a));
});
