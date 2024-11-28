const express = require('express');
const { createSchool, listSchools } = require('../controllers/schoolController');
const validate = require('../middlewares/validate');
const Joi = require('joi');

const router = express.Router();

// Validation schemas
const schoolSchema = Joi.object({
  name: Joi.string().required(),
  address: Joi.string().required(),
  latitude: Joi.number().required(),
  longitude: Joi.number().required(),
});

// Routes
router.post('/addSchool', validate(schoolSchema), createSchool);
router.get('/listSchools', listSchools);

module.exports = router;
