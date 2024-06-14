"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteOrderStatus = exports.updateOrderStatus = exports.createOrderStatus = exports.getOrderStatus = exports.listOrderStatus = void 0;
const orderStatus_service_1 = require("./orderStatus.service");
const listOrderStatus = async (c) => {
    try {
        //limit the number of orderstatus to be returned
        const limit = Number(c.req.query('limit'));
        const data = await (0, orderStatus_service_1.orderStatusService)(limit);
        if (data == null || data.length == 0) {
            return c.text("orderStatus not found", 404);
        }
        return c.json(data, 200);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.listOrderStatus = listOrderStatus;
const getOrderStatus = async (c) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id))
        return c.text("Invalid ID", 400);
    const orderStatus = await (0, orderStatus_service_1.getOrderStatusService)(id);
    if (orderStatus == undefined) {
        return c.text("orderstatus not found", 404);
    }
    return c.json(orderStatus, 200);
};
exports.getOrderStatus = getOrderStatus;
const createOrderStatus = async (c) => {
    try {
        const orderStatus = await c.req.json();
        const createdOrderStatus = await (0, orderStatus_service_1.createOrderStatusService)(orderStatus);
        if (!createdOrderStatus)
            return c.text("orderstatus not created", 404);
        return c.json({ msg: createdOrderStatus }, 201);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.createOrderStatus = createOrderStatus;
const updateOrderStatus = async (c) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id))
        return c.text("Invalid ID", 400);
    const orderStatus = await c.req.json();
    try {
        // search for the orderStatus
        const searchedOrderStatus = await (0, orderStatus_service_1.getOrderStatusService)(id);
        if (searchedOrderStatus == undefined)
            return c.text("orderStatus not found", 404);
        // get the data and update it
        const res = await (0, orderStatus_service_1.updateOrderStatusService)(id, orderStatus);
        // return a success message
        if (!res)
            return c.text("orderStatus not updated", 404);
        return c.json({ msg: res }, 201);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.updateOrderStatus = updateOrderStatus;
const deleteOrderStatus = async (c) => {
    const id = Number(c.req.param("id"));
    if (isNaN(id))
        return c.text("Invalid ID", 400);
    try {
        //search for the orderStatus
        const orderStatus = await (0, orderStatus_service_1.getOrderStatusService)(id);
        if (orderStatus == undefined)
            return c.text("orderStatus not found", 404);
        //deleting the orderStatus
        const res = await (0, orderStatus_service_1.deleteOrderStatusService)(id);
        if (!res)
            return c.text("orderStatus not deleted", 404);
        return c.json({ msg: res }, 201);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.deleteOrderStatus = deleteOrderStatus;
