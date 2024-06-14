"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteMenuItem = exports.updateMenuItem = exports.createMenuItem = exports.getMenuItem = exports.listMenuItem = void 0;
const menuItem_service_1 = require("./menuItem.service");
const listMenuItem = async (c) => {
    try {
        //limit the number of menuItem to be returned
        const limit = Number(c.req.query('limit'));
        const data = await (0, menuItem_service_1.menuItemService)(limit);
        if (data == null || data.length == 0) {
            return c.text("menuItem not found", 404);
        }
        return c.json(data, 200);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.listMenuItem = listMenuItem;
const getMenuItem = async (c) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id))
        return c.text("Invalid ID", 400);
    const menuItem = await (0, menuItem_service_1.getMenuItemService)(id);
    if (menuItem == undefined) {
        return c.text("menuItem not found", 404);
    }
    return c.json(menuItem, 200);
};
exports.getMenuItem = getMenuItem;
const createMenuItem = async (c) => {
    try {
        const menuItem = await c.req.json();
        const createdMenuItem = await (0, menuItem_service_1.createMenuItemService)(menuItem);
        if (!createdMenuItem)
            return c.text("menuItem not created", 404);
        return c.json({ msg: createdMenuItem }, 201);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.createMenuItem = createMenuItem;
const updateMenuItem = async (c) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id))
        return c.text("Invalid ID", 400);
    const menuItem = await c.req.json();
    try {
        // search for the menuItem
        const searchedMenuItem = await (0, menuItem_service_1.getMenuItemService)(id);
        if (searchedMenuItem == undefined)
            return c.text("menuItem not found", 404);
        // get the data and update it
        const res = await (0, menuItem_service_1.updateMenuItemService)(id, menuItem);
        // return a success message
        if (!res)
            return c.text("User not updated", 404);
        return c.json({ msg: res }, 201);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.updateMenuItem = updateMenuItem;
const deleteMenuItem = async (c) => {
    const id = Number(c.req.param("id"));
    if (isNaN(id))
        return c.text("Invalid ID", 400);
    try {
        //search for the menuItem
        const menuItem = await (0, menuItem_service_1.getMenuItemService)(id);
        if (menuItem == undefined)
            return c.text("menuItem not found", 404);
        //deleting the menuItem
        const res = await (0, menuItem_service_1.deleteMenuItemService)(id);
        if (!res)
            return c.text("menuItem not deleted", 404);
        return c.json({ msg: res }, 201);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.deleteMenuItem = deleteMenuItem;
