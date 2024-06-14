"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stateRouter = void 0;
const hono_1 = require("hono");
const state_controller_1 = require("./state.controller");
const bearAuth_1 = require("../middleware/bearAuth");
exports.stateRouter = new hono_1.Hono();
// //get all states    / state
// stateRouter.get("/state", listState);
// //get a single state    /state/1
// stateRouter.get("/state/:id", getState)
// // create a state
// stateRouter.post("/state", createState)
// //update a state
// stateRouter.put("/state/:id", updateState)
// stateRouter.delete("/state/:id", deleteState)
// //https:domai.com/state?limit=10
// stateRouter.get("/state-with-cities",getStatewithcity)
//Authentication
//get all states    / state
exports.stateRouter.get("/state", state_controller_1.listState);
//get a single state    /state/1
exports.stateRouter.get("/state/:id", bearAuth_1.userRoleAuth, bearAuth_1.userAdminRoleAuth, state_controller_1.getState);
// create a state
exports.stateRouter.post("/state", bearAuth_1.adminRoleAuth, state_controller_1.createState);
//update a sate
exports.stateRouter.put("/state/:id", bearAuth_1.adminRoleAuth, state_controller_1.updateState);
exports.stateRouter.delete("/state/:id", bearAuth_1.adminRoleAuth, state_controller_1.deleteState);
exports.stateRouter.get("/state-with-cities", state_controller_1.getStatewithcity);
