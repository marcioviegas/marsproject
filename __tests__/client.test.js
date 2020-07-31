import app from '../src/public/app';

test('extractRoversInformation', () => {
  expect(app('b')).toBe('b');
});
