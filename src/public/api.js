const URL = 'http://localhost:3000';

const getRovers = () => fetch(`${URL}/rovers`).then((res) => res.json());

export default getRovers;
