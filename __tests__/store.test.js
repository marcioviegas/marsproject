import store from '../src/public/store';

const mockCallback = jest.fn();

const updateStore = store(mockCallback);

const state = {};

test('should not change the state if action not mapped - but should return different object', () => {
  const newState = updateStore({ action: 'NONE' });
  expect(newState).toStrictEqual(state);
  expect(newState).not.toBe(state);
});

test('should add rovers on UPDATE and call callback', () => {
  const rover = { name: 'Copertino' };
  const newState = updateStore({ type: 'UPDATE_ROVERS', data: [rover] });
  expect(newState.rovers).toHaveLength(1);
  expect(newState.rovers[0]).toStrictEqual(rover);
  expect(mockCallback).toHaveBeenCalledWith(newState);
});
