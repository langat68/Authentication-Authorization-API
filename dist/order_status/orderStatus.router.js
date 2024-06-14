"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderStatusRouter = void 0;
const hono_1 = require("hono");
const orderStatus_controller_1 = require("./orderStatus.controller");
exports.orderStatusRouter = new hono_1.Hono();
//get all orderStatus    orderStatus
exports.orderStatusRouter.get("/orderStatus", orderStatus_controller_1.listOrderStatus);
//get a single orderStatus   orderStatus/1
exports.orderStatusRouter.get("/orderStatus/:id", orderStatus_controller_1.getOrderStatus);
// create an orderStatus
exports.orderStatusRouter.post("/orderStatus", orderStatus_controller_1.createOrderStatus);
//update an orderStatus
exports.orderStatusRouter.put("/orderStatus/:id", orderStatus_controller_1.updateOrderStatus);
exports.orderStatusRouter.delete("/orderStatus/:id", orderStatus_controller_1.deleteOrderStatus);
