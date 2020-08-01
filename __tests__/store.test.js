import Immutable from 'immutable';
import store from '../src/public/store';

const mockCallback = jest.fn();

const updateStore = store(mockCallback, Immutable);

const state = {};

test('should not change the state if action not mapped - but should return different object', () => {
  const newState = updateStore({ action: 'NONE' });
  expect(newState).toStrictEqual(state);
  expect(newState).not.toBe(state);
});

test('should add rovers on UPDATE and call callback', () => {
  const rover = { name: 'Mars' };
  const newState = updateStore({ type: 'ADD_ROVERS', data: [rover] });
  expect(newState.rovers).toHaveLength(1);
  expect(newState.rovers[0]).toStrictEqual(rover);
  expect(mockCallback).toHaveBeenCalledWith(newState);
});

test('should update photos for a given rover and only for that rover', () => {
  const rovers = [{ name: 'Mars' }, { name: 'Curiosity' }];
  let newState = updateStore({ type: 'ADD_ROVERS', data: rovers });

  const photos = [{ earth_data: '2020-1-10', img_src: 'image.src' }];
  newState = updateStore({ type: 'UPDATE_ROVER_PHOTOS', data: { rover: 'Mars', photos } });

  expect(newState.active).toBe('Mars');
  expect(newState.rovers[0]).toStrictEqual({
    name: 'Mars',
    photos: [{ earth_data: '2020-1-10', img_src: 'image.src' }],
  });

  expect(newState.rovers[1]).toStrictEqual({
    name: 'Curiosity',
  });
});
