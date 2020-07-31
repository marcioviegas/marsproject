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
  const appDOM = new JSDOM(app(state)).window.document;

  const rovers = appDOM.querySelectorAll('.rover');

  expect(rovers).toHaveLength(3);
});

test('build default section when no rover is select', () => {
  const appDOM = new JSDOM(app(state)).window.document;

  const sections = appDOM.querySelectorAll('section');

  expect(sections).toHaveLength(2);
  expect(sections[1].innerHTML).toContain('Please select a Rover');
});

test('build rovers menu link', () => {
  const appDOM = new JSDOM(app(state)).window.document;

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

test('build rover section', () => {
  const stateActived = {
    ...state,
    active: 'Curiosity',
  };

  const appDOM = new JSDOM(app(stateActived)).window.document;
  const roverSectionHTML = appDOM.querySelectorAll('section')[1].innerHTML;

  expect(roverSectionHTML).toContain('Name: Curiosity');
  expect(roverSectionHTML).toContain('Landing Date: 2012-08-06');
  expect(roverSectionHTML).toContain('Launch Date: 2011-11-26');
  expect(roverSectionHTML).toContain('Status: active');
  expect(roverSectionHTML).toContain('Max Date: 2020-07-28');
});
