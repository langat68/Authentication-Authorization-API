"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteDriver = exports.updateDriver = exports.createDriver = exports.getDriver = exports.listDriver = void 0;
const driver_service_1 = require("./driver.service");
const listDriver = async (c) => {
    try {
        //limit the number of drivers to be returned
        const limit = Number(c.req.query('limit'));
        const data = await (0, driver_service_1.driverService)(limit);
        if (data == null || data.length == 0) {
            return c.text("driver not found", 404);
        }
        return c.json(data, 200);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.listDriver = listDriver;
const getDriver = async (c) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id))
        return c.text("Invalid ID", 400);
    const driver = await (0, driver_service_1.getDriverService)(id);
    if (driver == undefined) {
        return c.text("driver not found", 404);
    }
    return c.json(driver, 200);
};
exports.getDriver = getDriver;
const createDriver = async (c) => {
    try {
        const driver = await c.req.json();
        const createdDriver = await (0, driver_service_1.createDriverService)(driver);
        if (!createdDriver)
            return c.text("driver not created", 404);
        return c.json({ msg: createdDriver }, 201);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.createDriver = createDriver;
const updateDriver = async (c) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id))
        return c.text("Invalid ID", 400);
    const driver = await c.req.json();
    try {
        // search for the driver
        const searchedDriver = await (0, driver_service_1.getDriverService)(id);
        if (searchedDriver == undefined)
            return c.text("driver not found", 404);
        // get the data and update it
        const res = await (0, driver_service_1.updateDriverService)(id, driver);
        // return a success message
        if (!res)
            return c.text("driver not updated", 404);
        return c.json({ msg: res }, 201);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.updateDriver = updateDriver;
const deleteDriver = async (c) => {
    const id = Number(c.req.param("id"));
    if (isNaN(id))
        return c.text("Invalid ID", 400);
    try {
        //search for the driver
        const driver = await (0, driver_service_1.getDriverService)(id);
        if (driver == undefined)
            return c.text("driver not found", 404);
        //deleting the driver
        const res = await (0, driver_service_1.deleteDriverService)(id);
        if (!res)
            return c.text("driver not deleted", 404);
        return c.json({ msg: res }, 201);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.deleteDriver = deleteDriver;
