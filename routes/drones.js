const express = require('express');
const async = require('hbs/lib/async');
const router = express.Router();
// require the Drone model here
const Drones = require('../models/Drone.model')



router.get('/drones', async (req, res, next) => {
  // Iteration #2: List the drones
  try {
    const drones = await Drones.find({});
    res.render('drones/list', { drones })
  } catch (error) {
    next(error)
  }

});

router.get('/drones/create', async (req, res, next) => {
  // Iteration #3: Add a new drone
  try {
    res.render('drones/create-form')
  } catch (error) {
    next(error)
  }
});

router.post('/drones/create', async (req, res, next) => {
  // Iteration #3: Add a new drone
  const { name, propellers, maxSpeed } = req.body
  const propNumber = parseInt(propellers)
  const speedNumber = parseInt(maxSpeed)

  try {
    await Drones.create({
      name, propellers: propNumber, maxSpeed: speedNumber
    })
    res.redirect('/drones')
  } catch (error) {
    next(error)
  }
});

router.get('/drones/:id/edit', async (req, res, next) => {
  // Iteration #4: Update the drone
  const { id } = req.params;
  try {
    const drone = await Drones.findById(id);
    res.render('drones/update-form', drone)
  } catch (error) {
    next(error)
  }
});

router.post('/drones/:id/edit', async (req, res, next) => {
  // Iteration #4: Update the drone
  const { id } = req.params;
  const { name, propellers, maxSpeed } = req.body

  const propNumber = parseInt(propellers)
  const speedNumber = parseInt(maxSpeed)

  try {
    await Drones.findByIdAndUpdate(id, { name, propellers: propNumber, maxSpeed: speedNumber })
    res.redirect('/drones')
  } catch (error) {
    next(error)
  }

});

router.post('/drones/:id/delete', async (req, res, next) => {
  // Iteration #5: Delete the drone
  const { id } = req.params;
  try {
    await Drones.findByIdAndDelete(id);
    res.redirect('/drones')
  } catch (error) {
    next(error)
  }
});

module.exports = router;
