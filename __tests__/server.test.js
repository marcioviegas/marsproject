import { extractRovers } from '../src/server/adapters';
import roversResponse from './rovers-response.json';

test('extractRoversInformation', () => {
  expect(extractRovers(roversResponse)).toBe({ roversResponse });
});
