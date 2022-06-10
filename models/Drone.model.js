// Iteration #1
const mongoose = require('mongoose')
const { Schema } = mongoose

const droneSchema = new Schema({
    name: String,
    propellers: Number,
    maxSpeed: Number,

})


const droneExport = mongoose.model('Drone.model', droneSchema);
module.exports = droneExport;