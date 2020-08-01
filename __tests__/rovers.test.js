import { extractRoversBasicInformation, extractPhotosBasicInformation } from '../src/server/rovers';
import roversResponse from './mocks/rovers-response.json';
import photosResponse from './mocks/curiosity-photos.json';

test('extractRoversInformation', () => {
  expect(extractRoversBasicInformation(roversResponse.rovers)).toStrictEqual(
    [
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
  );
});

test('extractPhotosInformation', () => {
  expect(extractPhotosBasicInformation(photosResponse.photos)).toStrictEqual(
    [
      {
        img_src: 'http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01004/opgs/edr/fcam/FLB_486615455EDR_F0481570FHAZ00323M_.JPG',
        earth_date: '2015-06-03',
      },
      {
        img_src: 'http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01004/opgs/edr/fcam/FRB_486615455EDR_F0481570FHAZ00323M_.JPG',
        earth_date: '2015-06-03',
      },
      {
        img_src: 'http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01004/opgs/edr/rcam/RLB_486615482EDR_F0481570RHAZ00323M_.JPG',
        earth_date: '2015-06-03',
      },
      {
        img_src: 'http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01004/opgs/edr/rcam/RRB_486615482EDR_F0481570RHAZ00323M_.JPG',
        earth_date: '2015-06-03',
      },
    ],
  );
});
