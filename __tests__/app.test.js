import app from '../src/public/app';

const state = {
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
};

test('build app', () => {
  const appRendered = app(state);
  expect(appRendered).toBe('<ul id=\'menu\'><li><a href=\'#\' id=\'Curiosity\'>Curiosity</a></li><li><a href=\'#\' id=\'Spirit\'>Spirit</a></li><li><a href=\'#\' id=\'Opportunity\'>Opportunity</a></li></ul>');
});
