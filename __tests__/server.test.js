import { extractRovers } from '../src/server/adapters';
import roversJson from './rovers.json';

test('extractRoversInformation', () => {
    
    expect(extractRovers(roversJson)).toBe(roversJson);

});