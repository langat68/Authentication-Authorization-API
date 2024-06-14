"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteRestaurantOwner = exports.updateRestaurantOwner = exports.createRestaurantOwner = exports.getRestaurantOwner = exports.listRestaurantOwner = void 0;
const restaurantOwner_service_1 = require("./restaurantOwner.service");
const listRestaurantOwner = async (c) => {
    try {
        //limit the number of restaurantOwner to be returned
        const limit = Number(c.req.query('limit'));
        const data = await (0, restaurantOwner_service_1.restaurantOwnerService)(limit);
        if (data == null || data.length == 0) {
            return c.text("restaurantOwner not found", 404);
        }
        return c.json(data, 200);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.listRestaurantOwner = listRestaurantOwner;
const getRestaurantOwner = async (c) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id))
        return c.text("Invalid ID", 400);
    const restaurantOwner = await (0, restaurantOwner_service_1.getRestaurantOwnerService)(id);
    if (restaurantOwner == undefined) {
        return c.text("restaurantowner not found", 404);
    }
    return c.json(restaurantOwner, 200);
};
exports.getRestaurantOwner = getRestaurantOwner;
const createRestaurantOwner = async (c) => {
    try {
        const restaurantOwner = await c.req.json();
        const createdRestaurantOwner = await (0, restaurantOwner_service_1.createRestaurantOwnerService)(restaurantOwner);
        if (!createdRestaurantOwner)
            return c.text("restaurantOwner not created", 404);
        return c.json({ msg: createdRestaurantOwner }, 201);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.createRestaurantOwner = createRestaurantOwner;
const updateRestaurantOwner = async (c) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id))
        return c.text("Invalid ID", 400);
    const restaurantOwner = await c.req.json();
    try {
        // search for the restaurantOwner
        const searchedRestaurantOwner = await (0, restaurantOwner_service_1.getRestaurantOwnerService)(id);
        if (searchedRestaurantOwner == undefined)
            return c.text("restaurantOwner not found", 404);
        // get the data and update it
        const res = await (0, restaurantOwner_service_1.updateRestaurantOwnerService)(id, restaurantOwner);
        // return a success message
        if (!res)
            return c.text("restaurantOwner not updated", 404);
        return c.json({ msg: res }, 201);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.updateRestaurantOwner = updateRestaurantOwner;
const deleteRestaurantOwner = async (c) => {
    const id = Number(c.req.param("id"));
    if (isNaN(id))
        return c.text("Invalid ID", 400);
    try {
        //search for the restaurantOwner
        const restaurantOwner = await (0, restaurantOwner_service_1.getRestaurantOwnerService)(id);
        if (restaurantOwner == undefined)
            return c.text("restaurantowner not found", 404);
        //deleting the restaurantOwner
        const res = await (0, restaurantOwner_service_1.deleteRestaurantOwnerService)(id);
        if (!res)
            return c.text("User not deleted", 404);
        return c.json({ msg: res }, 201);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.deleteRestaurantOwner = deleteRestaurantOwner;
