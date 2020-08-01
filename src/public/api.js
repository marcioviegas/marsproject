const URL = 'http://localhost:3000';

const getRovers = () => fetch(`${URL}/rovers`).then((res) => res.json());

const getPhotos = (roverName) => fetch(`${URL}/rovers/${roverName}/photos`).then((res) => res.json());

export { getRovers, getPhotos };
