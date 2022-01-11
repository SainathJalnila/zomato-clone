// let express = require('express');
let mongo = require('mongoose');


let Schema = mongo.Schema;

const LocationData = new Schema({
    city:{
        type : String,
        required: true
    },
    pincode :
    {
        type : Number,
        required: true
    },
    location_id : {
        type: Number, 
        required : true
    }
})  
module.exports  = mongo.model('Location', LocationData , 'location')