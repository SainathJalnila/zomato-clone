let mongo = require('mongoose');

let schema = mongo.Schema;

let mealtype =  new schema({
    
    name:{
        type : String,
        required: true
    }
});
module.exports =  mongo.model("mealType" , mealtype , "mealtype")