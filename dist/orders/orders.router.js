"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ordersRouter = void 0;
const hono_1 = require("hono");
const orders_controller_1 = require("./orders.controller");
exports.ordersRouter = new hono_1.Hono();
//get all orders     orders
exports.ordersRouter.get("/orders", orders_controller_1.listOrders);
//get a single order   orders/1
exports.ordersRouter.get("/orders/:id", orders_controller_1.getOrders);
// create an order
exports.ordersRouter.post("/orders", orders_controller_1.createOrders);
//update an order
exports.ordersRouter.put("/orders/:id", orders_controller_1.updateOrders);
exports.ordersRouter.delete("/orders/:id", orders_controller_1.deleteOrders);
// ordersRouter.get("/users/:id",userRoleAuth,userAdminRoleAuth, getOrders);
// //get all order      api/order
// ordersRouter.get("/orders", listOrders);
// //get a single order    api/orders/1
// ordersRouter.get("/orders/:id",userRoleAuth,userAdminRoleAuth, getOrders);
// // create a order 
// ordersRouter.post("/orders",userRoleAuth,userAdminRoleAuth, createOrders);
// //update a order
// ordersRouter.put("/orders/:id",adminRoleAuth, updateOrders);
// ordersRouter.delete("/users/:id",adminRoleAuth, deleteOrders);
