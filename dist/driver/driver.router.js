"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.driverRouter = void 0;
const hono_1 = require("hono");
const driver_controller_1 = require("./driver.controller");
const bearAuth_1 = require("../middleware/bearAuth");
exports.driverRouter = new hono_1.Hono();
//get all driver     /driver
exports.driverRouter.get("/driver", bearAuth_1.adminRoleAuth, driver_controller_1.listDriver);
//get a single driver    /driver/1
exports.driverRouter.get("/driver/:id", bearAuth_1.userRoleAuth, driver_controller_1.getDriver);
// create a driver
exports.driverRouter.post("/driver", bearAuth_1.userRoleAuth, driver_controller_1.createDriver);
//update a driver
exports.driverRouter.put("/driver/:id", bearAuth_1.adminRoleAuth, driver_controller_1.updateDriver);
exports.driverRouter.delete("/driver/:id", bearAuth_1.adminRoleAuth, driver_controller_1.deleteDriver);
//https:domai.com/driver?limit=10
