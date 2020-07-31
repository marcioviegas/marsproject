import extractRoversBasicInformation from '../src/server/adapters';
import roversResponse from './rovers-response.json';

test('extractRoversInformation', () => {
  expect(extractRoversBasicInformation(roversResponse)).toStrictEqual({
    rovers: [
      {
        name: 'Curiosity',
        landing_date: '2012-08-06',
        launch_date: '2011-11-26',
        max_date: '2020-07-28',
        status: 'active',
      },
      {
        name: 'Spirit',
        landing_date: '2004-01-04',
        launch_date: '2003-06-10',
        status: 'complete',
        max_date: '2010-03-21',
      },
      {
        name: 'Opportunity',
        landing_date: '2004-01-25',
        launch_date: '2003-07-07',
        status: 'complete',
        max_date: '2018-06-11',
      },
    ],
  });
});
