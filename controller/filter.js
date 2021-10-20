const restData = require('../modules/restaurants');

exports.FilterData = (req, res) =>
{
    let { mealtype, location, cuisine, lcost, hcost, page, sort ,  size, rating_low, rating_high , restaurant_name } = req.body;

    sort = sort ? sort : 1;
    page = page ? page : 1;
    size = size ? size : 2;

    const limit = parseInt(size);
    const skip = (page -1)* size;


    let filterObj = {};
    

    mealtype && (filterObj["mealtype_id"] = mealtype);
    location && (filterObj["location_id"] = location);
    cuisine && (filterObj["cuisine_id"] =  cuisine);
    rating_low && rating_high && (filterObj['aggregate_rating'] = {$lte: rating_low, $gte: rating_high} );
    restaurant_name && (filterObj['name'] = restaurant_name);
    lcost && hcost && (filterObj["min_price"] = { $gte: lcost, $lte: hcost });
       
  
    restData.find(filterObj).sort({location_id : sort}).limit(limit).skip(skip)
    .then(response=>{
        res.status(200).json({
            message : "Restaurant  Data  Filter Successfully",
            page,
            size,
            FilterData : response
            
        })
    }).catch(err => {error: err});

}
