// Iteration #1
const mongoose = require('mongoose');
const droneRequired = require('../models/Drone.model');

const drones = [
    {
        name: 'dji mini 2',
        propellers: 4,
        maxSpeed: 80
    },
    {
        name: 'dji mavic 3',
        propellers: 5,
        maxSpeed: 110
    },
    {
        name: 'dji fpv drone',
        propellers: 4,
        maxSpeed: 150
    }
];

mongoose.connect("mongodb://localhost/lab-express-drones")
    .then(x => console.log(`conected to {x.connection.name}`))
    .then(() => {
        return droneRequired.create(drones)
    })
    .catch(e => console.log(e))
    .finally(() => {
        mongoose.connection.close()
    })