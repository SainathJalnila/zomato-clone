const restData = require('../modules/restaurants');

exports.FilterData = (req, res) =>
{
    let { mealtype, location, cuisine, lcost, hcost, page, sort ,  itemsPerPage , rating_low, rating_high , restaurant_name } = req.body;

    sort = sort ? sort : 1;
    page = page ? page : 1;
    itemsPerPage = itemsPerPage ? itemsPerPage : 2;

    let startIndex = page * itemsPerPage - itemsPerPage;
    let endIndex = page * itemsPerPage;


    let filterObj = {};
    

    mealtype && (filterObj["mealtype_id"] = mealtype);
    location && (filterObj["location_id"] = location);
    cuisine && (filterObj["cuisine_id"] = {$in: cuisine});
    rating_low && rating_high && (filterObj['aggregate_rating'] = {$lte: rating_low, $gte: rating_high} );
    restaurant_name && (filterObj['name'] = restaurant_name);
    lcost && hcost && (filterObj["min_price"] = { $gte: lcost, $lte: hcost });
       
   
    restData.find(filterObj).sort({min_price : sort})
    .then(response=>{
        const filteredResponse = response.slice(startIndex, endIndex);
       const data = Math.ceil(response.length/itemsPerPage );
        console.log(data);
        res.status(200).json({
            message : "Restaurant  Data  Filter Successfully",
            FilterData : filteredResponse,
            data : data
            
        })
    }).catch(err => {error: err});

}
