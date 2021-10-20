const express =  require('express');

const route = express.Router();

const localController =  require('../controller/getLocation');
const mealController =  require('../controller/getmealtype');
const userController =  require('../controller/user');
const filterController =  require('../controller/filter');
const restaurantDetails = require('../controller/restaurantDetails');
const itemController = require('../controller/item');
const orderController = require('../controller/oderDetails');
route.get('/location' , localController.getLocations);
route.get('/mealtype' , mealController.getMealType);
route.get('/mealtype/:citys' , mealController.getMealTypeLoc);
route.post('/signup' , userController.userSignUp);
route.post('/login' , userController.userLogin);
route.post('/filter', filterController.FilterData);
route.get('/restaurant/:restId', restaurantDetails.getRestoDetailsById);
route.get('/itemDetails/:itemId', itemController.itemByRestoId);
route.post('/orderDetails', orderController.orderDetails)





module.exports = route;

