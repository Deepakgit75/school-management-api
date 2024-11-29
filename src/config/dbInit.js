const db = require('./db'); // Import the database connection

// Function to initialize the database
const initializeDatabase = async () => {
  const createTableQuery = `
    CREATE TABLE IF NOT EXISTS schools (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      address VARCHAR(255) NOT NULL,
      latitude FLOAT NOT NULL,
      longitude FLOAT NOT NULL
    );
  `;

  db.query(createTableQuery, (err, results) => {
    if (err) {
      console.error('Error creating schools table:', err.message);
    } else {
      console.log('Schools table is ready or already exists.');
    }
  });
};

module.exports = initializeDatabase;
