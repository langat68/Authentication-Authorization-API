"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cityRouter = void 0;
const hono_1 = require("hono");
const city_controller_1 = require("./city.controller");
exports.cityRouter = new hono_1.Hono();
//get all cities     /city
exports.cityRouter.get("/city", city_controller_1.listCity);
//get a single city    city/1
exports.cityRouter.get("/city/:id", city_controller_1.getCity);
// create a city
exports.cityRouter.post("/city", city_controller_1.createCity);
//update a city
exports.cityRouter.put("/city/:id", city_controller_1.updateCity);
exports.cityRouter.delete("/city/:id", city_controller_1.deleteCity);
