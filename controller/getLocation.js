const Location = require('../modules/location');



exports.getLocations = (req , res) =>
{
    Location.find().then(response =>
     {
          res.status(200).json({
               message: "Location Data fetch successfully",
               location: response  
          })
     }

    )
}


