"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.restaurantRouter = void 0;
const hono_1 = require("hono");
const restaurant_controller_1 = require("./restaurant.controller");
exports.restaurantRouter = new hono_1.Hono();
//get all restaurants     restaurant
exports.restaurantRouter.get("/restaurant", restaurant_controller_1.listRestaurant);
//get a single restaurant    restaurant/1
exports.restaurantRouter.get("/restaurant/:id", restaurant_controller_1.getRestaurant);
// create a restaurant 
exports.restaurantRouter.post("/restaurant", restaurant_controller_1.createRestaurant);
//update a restaurant
exports.restaurantRouter.put("/restaurant/:id", restaurant_controller_1.updateRestaurant);
exports.restaurantRouter.delete("/restaurant/:id", restaurant_controller_1.deleteRestaurant);
