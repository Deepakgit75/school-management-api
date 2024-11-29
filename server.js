const express = require('express');
const dotenv = require('dotenv');
const helmet = require('helmet');
// const cors = require('cors');
const errorHandler = require('./src/middlewares/errorHandler');
const schoolRoutes = require('./src/routes/schoolRoutes');
const initializeDatabase = require('./src/config/dbInit');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

initializeDatabase();

// Middleware
app.use(helmet());
// app.use(cors({ origin: process.env.ALLOWED_ORIGINS.split(',') }));
app.use(express.json());

// Routes
app.use('/api/schools', schoolRoutes);

// Error handling middleware
app.use(errorHandler);

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
