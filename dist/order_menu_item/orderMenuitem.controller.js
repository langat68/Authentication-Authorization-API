"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteOrderMenuItem = exports.updateOrderMenuItem = exports.createOrderMenuItem = exports.getOrderMenuItem = exports.listOrderMenuItem = void 0;
const orderMenuItem_service_1 = require("./orderMenuItem.service");
const schema_1 = require("../drizzle/schema");
const listOrderMenuItem = async (c) => {
    try {
        //limit the number of orderMenuItems to be returned
        const limit = Number(c.req.query('limit'));
        const data = await (0, orderMenuItem_service_1.orderMenuItemService)(limit);
        if (data == null || data.length == 0) {
            return c.text("orderMenuItem not found", 404);
        }
        return c.json(data, 200);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.listOrderMenuItem = listOrderMenuItem;
const getOrderMenuItem = async (c) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id))
        return c.text("Invalid ID", 400);
    const orderMenuItem = await (0, orderMenuItem_service_1.getOrderMenuItemService)(id);
    if (schema_1.ordermenuItem == undefined) {
        return c.text("orderMenuItem not found", 404);
    }
    return c.json(orderMenuItem, 200);
};
exports.getOrderMenuItem = getOrderMenuItem;
const createOrderMenuItem = async (c) => {
    try {
        const orderMenuItem = await c.req.json();
        const createdOrderMenuItem = await (0, orderMenuItem_service_1.createOrderMenuItemService)(orderMenuItem);
        if (!createdOrderMenuItem)
            return c.text("orderMenuItem not created", 404);
        return c.json({ msg: createdOrderMenuItem }, 201);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.createOrderMenuItem = createOrderMenuItem;
const updateOrderMenuItem = async (c) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id))
        return c.text("Invalid ID", 400);
    const orderMenuItem = await c.req.json();
    try {
        // search for the orderMenuItem
        const searchedOrderMenuItem = await (0, orderMenuItem_service_1.getOrderMenuItemService)(id);
        if (searchedOrderMenuItem == undefined)
            return c.text("orderMenuItem not found", 404);
        // get the data and update it
        const res = await (0, orderMenuItem_service_1.updateOrderMenuItemService)(id, orderMenuItem);
        // return a success message
        if (!res)
            return c.text("orderMenuItem not updated", 404);
        return c.json({ msg: res }, 201);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.updateOrderMenuItem = updateOrderMenuItem;
const deleteOrderMenuItem = async (c) => {
    const id = Number(c.req.param("id"));
    if (isNaN(id))
        return c.text("Invalid ID", 400);
    try {
        //search for the orderMenuItem
        const orderMenuItem = await (0, orderMenuItem_service_1.getOrderMenuItemService)(id);
        if (orderMenuItem == undefined)
            return c.text("orderMenuItem not found", 404);
        //deleting the ordermenuItem
        const res = await (0, orderMenuItem_service_1.deleteOrderMenuItemService)(id);
        if (!res)
            return c.text("orderMenuItem not deleted", 404);
        return c.json({ msg: res }, 201);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.deleteOrderMenuItem = deleteOrderMenuItem;
