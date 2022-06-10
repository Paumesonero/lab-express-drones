const express = require('express');
const async = require('hbs/lib/async');
const router = express.Router();
const Drones = require('../models/Drone.model')

// require the Drone model here

router.get('/drones', async (req, res, next) => {
  // Iteration #2: List the drones
  try {
    const drones = await Drones.find({});
    res.render('drones/list', { drones })
  } catch (error) {
    next(error)
  }

});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
});

module.exports = router;
