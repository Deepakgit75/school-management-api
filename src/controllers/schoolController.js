const { addSchool, getAllSchools } = require('../models/School');
const calculateDistance = require('../utils/calculateDistance');

const createSchool = (req, res, next) => {
  const school = req.body;
  addSchool(school, (err, result) => {
    if (err) return next(err);
    res.status(201).json({ message: 'School added successfully!', schoolId: result.insertId });
  });
};

const listSchools = (req, res, next) => {
  const { latitude, longitude } = req.query;
  const userLocation = { latitude: parseFloat(latitude), longitude: parseFloat(longitude) };

  getAllSchools((err, results) => {
    if (err) return next(err);

    const sortedSchools = calculateDistance(userLocation, results).sort((a, b) => a.distance - b.distance);
    res.status(200).json(sortedSchools);
  });
};

module.exports = { createSchool, listSchools };
