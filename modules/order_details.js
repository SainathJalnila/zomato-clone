const mongo =  require('mongoose');


let schema = mongo.Schema;

let orderData =  new schema({
    restaurantName :{
        type : String,
        required: true
    },
    itemName :
    {
        type: Array,
        required: true
    },
    TotalPrice:
    {
        type: Number,
        required:true
    },
    orderDate:{
        type: Date,
        required: true
    }
});
module.exports = mongo.model("orderData", orderData , "orderData");