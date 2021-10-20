const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const restaurantsSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    location_id: {
        type: Number,
        required: true
    },
    city:
    {
        type: String,
        required: true
    },
    resto_id : {
        type: Number,
        required: true

    }
})

module.exports = mongoose.model('restaurant', restaurantsSchema, 'restaurantdata');