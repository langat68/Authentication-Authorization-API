"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteOrders = exports.updateOrders = exports.createOrders = exports.getOrders = exports.listOrders = void 0;
const orders_service_1 = require("./orders.service");
const listOrders = async (c) => {
    try {
        //limit the number of orders to be returned
        const limit = Number(c.req.query('limit'));
        const data = await (0, orders_service_1.ordersService)(limit);
        if (data == null || data.length == 0) {
            return c.text("order not found", 404);
        }
        return c.json(data, 200);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.listOrders = listOrders;
const getOrders = async (c) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id))
        return c.text("Invalid ID", 400);
    const orders = await (0, orders_service_1.getOrdersService)(id);
    if (orders == undefined) {
        return c.text("order not found", 404);
    }
    return c.json(orders, 200);
};
exports.getOrders = getOrders;
const createOrders = async (c) => {
    try {
        const orders = await c.req.json();
        const createdOrders = await (0, orders_service_1.createOrdersService)(orders);
        if (!createdOrders)
            return c.text("order not created", 404);
        return c.json({ msg: createdOrders }, 201);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.createOrders = createOrders;
const updateOrders = async (c) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id))
        return c.text("Invalid ID", 400);
    const orders = await c.req.json();
    try {
        // search for the order
        const searchedOrders = await (0, orders_service_1.getOrdersService)(id);
        if (searchedOrders == undefined)
            return c.text("orders not found", 404);
        // get the data and update it
        const res = await (0, orders_service_1.updateOrdersService)(id, orders);
        // return a success message
        if (!res)
            return c.text("order not updated", 404);
        return c.json({ msg: res }, 201);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.updateOrders = updateOrders;
const deleteOrders = async (c) => {
    const id = Number(c.req.param("id"));
    if (isNaN(id))
        return c.text("Invalid ID", 400);
    try {
        //search for the order
        const orders = await (0, orders_service_1.getOrdersService)(id);
        if (orders == undefined)
            return c.text("order not found", 404);
        //deleting the order
        const res = await (0, orders_service_1.deleteOrdersService)(id);
        if (!res)
            return c.text("order not deleted", 404);
        return c.json({ msg: res }, 201);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.deleteOrders = deleteOrders;
