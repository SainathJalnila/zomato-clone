const itemData =  require('../modules/item');



exports.itemByRestoId = (req ,  res) =>
{
   const { itemId } = req.params;
   itemData.find({ restaurantId : itemId})
   .then(response =>{

    res.status(200).json({
        message : "restaurant Details fetch successfully",
        RestaurantById : response
    })
      console.log(itemId);
   })
   .catch(err=> res.status(500)({error : err}))
   

}