const orderDetail = require('../modules/order_details');

exports.orderDetails = (req, res)=>{
      const {resto_name, itemName, totalPrice }  = req.body;

     const  orderDate = new Date();
    
       const orderData = new orderDetail({
        restaurantName : resto_name,
        itemName :  itemName,
        TotalPrice:  totalPrice,
        orderDate : orderDate
           });

           orderData.save({orderData})
           .then(response=>{
               res.status(200).json({
                   message: "data save successfully",
                   outPut: response
               })
           })


}