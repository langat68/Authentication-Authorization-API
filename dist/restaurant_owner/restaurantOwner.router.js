"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.restaurantOwnerRouter = void 0;
const hono_1 = require("hono");
const restaurantOwner_controller_1 = require("./restaurantOwner.controller");
exports.restaurantOwnerRouter = new hono_1.Hono();
//get all restaurantOwner     /restaurantOwner
exports.restaurantOwnerRouter.get("/restaurantOwner", restaurantOwner_controller_1.listRestaurantOwner);
//get a single  restaurantOwner  / restaurantOwner/1
exports.restaurantOwnerRouter.get("/restaurantOwner/:id", restaurantOwner_controller_1.getRestaurantOwner);
// create a  restaurantOwner
exports.restaurantOwnerRouter.post("/restaurantOwner", restaurantOwner_controller_1.createRestaurantOwner);
//update a  restaurantOwner
exports.restaurantOwnerRouter.put("/restaurantOwner/:id", restaurantOwner_controller_1.updateRestaurantOwner);
exports.restaurantOwnerRouter.delete("/restaurantOwner/:id", restaurantOwner_controller_1.deleteRestaurantOwner);
//https:domai.com/ restaurantOwner?limit=10
