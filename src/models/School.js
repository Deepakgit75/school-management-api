const db = require('../config/db');

const addSchool = (school, callback) => {
  

  const sql = 'INSERT INTO schools (name, address, latitude, longitude) VALUES (?, ?, ?, ?)';
  db.query(sql, [school.name, school.address, school.latitude, school.longitude], callback);
};

const getAllSchools = (callback) => {
  const sql = 'SELECT * FROM schools';
  db.query(sql, callback);
};

module.exports = { addSchool, getAllSchools };
