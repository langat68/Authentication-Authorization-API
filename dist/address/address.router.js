"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addressRouter = void 0;
const hono_1 = require("hono");
const address_controller_1 = require("./address.controller");
exports.addressRouter = new hono_1.Hono();
//get all Address     /address
exports.addressRouter.get("/address", address_controller_1.listAddress);
//get a single address      /address/1
exports.addressRouter.get("/address/:id", address_controller_1.getAddress);
// create a address
exports.addressRouter.post("/address", address_controller_1.createAddress);
//update a address
exports.addressRouter.put("/address/:id", address_controller_1.updateAddress);
exports.addressRouter.delete("/address/:id", address_controller_1.deleteAddress);
//https:domai.com/address?limit=10
