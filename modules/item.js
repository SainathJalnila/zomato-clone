const mongo = require('mongoose');

const Schema = mongo.Schema;

let itemDetails =  new Schema({
    name:{
         type: String,
         required: true
    },
    restaurantId :{
        type: String,
        required: true
    }
})

module.exports  = mongo.model('itemData' , itemDetails ,'item')