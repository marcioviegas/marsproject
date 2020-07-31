import express from 'express';
import bodyParser from 'body-parser';
import fetch from 'node-fetch';
import path from 'path';
import extractRoversBasicInformation from './adapters.js';

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', express.static(path.join(path.resolve(), 'src/public')));
app.use('/immutable', express.static(path.join(path.resolve(), 'node_modules/immutable/dist/immutable.min.js')));

const fetchAsync = async (url) => (await fetch(url)).json();

app.get('/rovers', async (req, res) => {
  try {
    const nasaApiRoversData = await fetchAsync(`https://api.nasa.gov/mars-photos/api/v1/rovers?api_key=${process.env.NASA_API_KEY}`);
    const rovers = extractRoversBasicInformation(nasaApiRoversData.rovers);
    res.send({ rovers });
  } catch (err) {
    console.log('error:', err);
  }
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
