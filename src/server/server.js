import express from 'express';
import bodyParser from 'body-parser';
import fetch from 'node-fetch';
import path from 'path';
import { extractRoversBasicInformation, extractPhotosBasicInformation } from './rovers.js';

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', express.static(path.join(path.resolve(), 'src/public')));
app.use('/immutable', express.static(path.join(path.resolve(), 'node_modules/immutable/dist/immutable.min.js')));

const fetchAsync = async (url) => (await fetch(url)).json();

const ROVERS_URL = 'https://api.nasa.gov/mars-photos/api/v1/rovers';

app.get('/rovers', async (req, res) => {
  try {
    const nasaApiRoversData = await fetchAsync(`${ROVERS_URL}?api_key=${process.env.NASA_API_KEY}`);
    const rovers = extractRoversBasicInformation(nasaApiRoversData.rovers);
    res.send({ rovers });
  } catch (err) {
    throw new Error(err);
  }
});

app.get('/rovers/:name/photos', async (req, res) => {
  try {
    const { name } = req.params;
    const nasaApiPhotosData = await fetchAsync(`${ROVERS_URL}/${name}/photos?sol=1000&page=1&api_key=${process.env.NASA_API_KEY}`);
    const photos = extractPhotosBasicInformation(nasaApiPhotosData.photos);
    res.send({ photos });
  } catch (err) {
    throw new Error(err);
  }
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
