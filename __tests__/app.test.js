import { JSDOM } from 'jsdom';
import app from '../src/public/app';

const state = {
  rovers: [
    {
      name: 'Curiosity',
      landing_date: '2012-08-06',
      launch_date: '2011-11-26',
      max_date: '2020-07-28',
      status: 'active',
      photos: [
        { earth_data: '2020-1-20', img_src: 'https://img.src' },
      ],
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

test('build menu with corresponding class', () => {
  const appDOM = new JSDOM(app(state).menu).window.document;

  const rovers = appDOM.querySelectorAll('.rover');

  expect(rovers).toHaveLength(3);
});

test('build rovers menu link', () => {
  const appDOM = new JSDOM(app(state).menu).window.document;

  const curiosity = appDOM.querySelector('#Curiosity');

  expect(curiosity).toBeDefined();
  expect(curiosity.innerHTML).toBe('Curiosity');

  const spirit = appDOM.querySelector('#Spirit');

  expect(spirit).toBeDefined();
  expect(spirit.innerHTML).toBe('Spirit');

  const oportunity = appDOM.querySelector('#Opportunity');

  expect(oportunity).toBeDefined();
  expect(oportunity.innerHTML).toBe('Opportunity');
});

test('build default section when no rover is select', () => {
  const appDOM = new JSDOM(app(state).content).window.document;

  const contentHTML = appDOM.documentElement.innerHTML;

  expect(contentHTML).toContain('Please select a Rover');
});

test('build rover section with image', () => {
  const stateActived = {
    ...state,
    active: 'Curiosity',
  };

  const appDOM = new JSDOM(app(stateActived).content).window.document;

  const contentHTML = appDOM.documentElement.innerHTML;

  expect(contentHTML).toContain('Name: Curiosity');
  expect(contentHTML).toContain('Landing Date: 2012-08-06');
  expect(contentHTML).toContain('Launch Date: 2011-11-26');
  expect(contentHTML).toContain('Status: active');
  expect(contentHTML).toContain('Max Date: 2020-07-28');

  const img = appDOM.querySelector('img');
  expect(img).toBeDefined();
  expect(img.src).toBe('https://img.src/');
});
