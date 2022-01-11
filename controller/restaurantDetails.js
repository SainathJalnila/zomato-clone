const restaurant = require('../modules/restaurants');


exports.getRestoDetailsById = (req ,  res) =>
{
   const { restId } = req.params;
   restaurant.findById(restId)
   .then(response =>{
    res.status(200).json({
        message : "restaurant Details fetch successfully",
        RestaurantById : response
    })
      console.log(restId);
   })
   .catch(err=> res.status(500)({error : err}))
   

}