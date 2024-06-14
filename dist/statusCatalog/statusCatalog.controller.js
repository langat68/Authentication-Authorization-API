"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteStatusCatalog = exports.updateStatusCatalog = exports.createStatusCatalog = exports.getStatusCatalog = exports.listStatusCatalog = void 0;
const statusCatalog_service_1 = require("./statusCatalog.service");
const listStatusCatalog = async (c) => {
    try {
        //limit the number of StatusCatalog to be returned
        const limit = Number(c.req.query('limit'));
        const data = await (0, statusCatalog_service_1.statusCatalogService)(limit);
        if (data == null || data.length == 0) {
            return c.text("StatusCatalog not found", 404);
        }
        return c.json(data, 200);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.listStatusCatalog = listStatusCatalog;
const getStatusCatalog = async (c) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id))
        return c.text("Invalid ID", 400);
    const statusCatalog = await (0, statusCatalog_service_1.getStatusCatalogService)(id);
    if (statusCatalog == undefined) {
        return c.text("StatusCatalog not found", 404);
    }
    return c.json(statusCatalog, 200);
};
exports.getStatusCatalog = getStatusCatalog;
const createStatusCatalog = async (c) => {
    try {
        const statusCatalog = await c.req.json();
        const createdStatusCatalog = await (0, statusCatalog_service_1.createStatusCatalogService)(statusCatalog);
        if (!createdStatusCatalog)
            return c.text("StatusCatalog not created", 404);
        return c.json({ msg: createdStatusCatalog }, 201);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.createStatusCatalog = createStatusCatalog;
const updateStatusCatalog = async (c) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id))
        return c.text("Invalid ID", 400);
    const statusCatalog = await c.req.json();
    try {
        // search for the StatusCatalog
        const searchedStatusCatalog = await (0, statusCatalog_service_1.getStatusCatalogService)(id);
        if (searchedStatusCatalog == undefined)
            return c.text("StatusCatalog not found", 404);
        // get the data and update it
        const res = await (0, statusCatalog_service_1.updateStatusCatalogService)(id, statusCatalog);
        // return a success message
        if (!res)
            return c.text("StatusCatalog not updated", 404);
        return c.json({ msg: res }, 201);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.updateStatusCatalog = updateStatusCatalog;
const deleteStatusCatalog = async (c) => {
    const id = Number(c.req.param("id"));
    if (isNaN(id))
        return c.text("Invalid ID", 400);
    try {
        //search for the StatusCatalog
        const statusCatalog = await (0, statusCatalog_service_1.getStatusCatalogService)(id);
        if (statusCatalog == undefined)
            return c.text("StatusCatalog not found", 404);
        //deleting the StatusCatalog
        const res = await (0, statusCatalog_service_1.deleteStatusCatalogService)(id);
        if (!res)
            return c.text("StatusCatalog not deleted", 404);
        return c.json({ msg: res }, 201);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.deleteStatusCatalog = deleteStatusCatalog;
