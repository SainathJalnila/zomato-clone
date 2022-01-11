const restaurant = require('../modules/restaurants');
const mealType = require('../modules/mealtype');

exports.getMealType = (req,  res )=>
{
      
      mealType.find().sort({meal_type:1}).then(response=>{
          res.status(200).json({
               message : 'data fetch successfully',
               MealType: response  
            })
          }


      ).catch()
}

exports.getMealTypeLoc = ( req , res) =>
{
     const { locId } = req.params;
     restaurant.find({location_id : locId })
     .then(response=>{
          res.status(200).json({
               message: "Restaurants Fetched by Locations Successfully",
               restaurantData: response
                   
               })
               
     }).catch(err => res.status(500).json({error:err}))
    
     
}

