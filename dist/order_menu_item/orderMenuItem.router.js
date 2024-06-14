"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderMenuItemRouter = void 0;
const hono_1 = require("hono");
const orderMenuitem_controller_1 = require("./orderMenuitem.controller");
exports.orderMenuItemRouter = new hono_1.Hono();
//get all orderMenuitem      /orderMenuItem
exports.orderMenuItemRouter.get("/orderMenuItem", orderMenuitem_controller_1.listOrderMenuItem);
//get a single orderMenuItem    /orderMenuItem/1
exports.orderMenuItemRouter.get("/ordermenuItem/:id", orderMenuitem_controller_1.getOrderMenuItem);
// create an orderMenuItem
exports.orderMenuItemRouter.post("/orderMenuItem", orderMenuitem_controller_1.createOrderMenuItem);
//update a orderMenuItem
exports.orderMenuItemRouter.put("/orderMenuItem/:id", orderMenuitem_controller_1.updateOrderMenuItem);
exports.orderMenuItemRouter.delete("/orderMenuItem/:id", orderMenuitem_controller_1.deleteOrderMenuItem);
//https:domai.com/orderMenuItem?limit=10
