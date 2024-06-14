import { Hono } from "hono";
import { listOrders, getOrders, createOrders, updateOrders, deleteOrders } from "./orders.controller"
//import { adminRoleAuth,userRoleAuth,userAdminRoleAuth} from "../middleware/bearAuth";
import { zValidator } from "@hono/zod-validator";
import { ordersSchema } from "../validators";
export const ordersRouter = new Hono();

//get all orders     orders
ordersRouter.get("/orders", listOrders);
//get a single order   orders/1
ordersRouter.get("/orders/:id", getOrders)
// create an order
ordersRouter.post("/orders", createOrders)
//update an order
ordersRouter.put("/orders/:id", updateOrders)

ordersRouter.delete("/orders/:id", deleteOrders)

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