const { getDistance } = require('geolib');

const calculateDistance = (userLocation, schools) => {
  return schools.map((school) => ({
    ...school,
    distance: getDistance(userLocation, {
      latitude: school.latitude,
      longitude: school.longitude,
    }),
  }));
};

module.exports = calculateDistance;
