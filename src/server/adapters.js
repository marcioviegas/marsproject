const removeIdentifier = (obj, identifier) => {
  const {
    [identifier]: remove,
    ...objWithoutIdentifier
  } = obj;

  return objWithoutIdentifier;
};

const removeIdentifiers = (obj, ...identifiers) => identifiers.reduce(removeIdentifier, obj);

const sanatizeRover = (rover) => removeIdentifiers(rover, 'id', 'total_photos', 'max_sol', 'cameras');

const extractRoversBasicInformation = (nasaApiRoversData) => nasaApiRoversData.map(sanatizeRover);

export default extractRoversBasicInformation;
