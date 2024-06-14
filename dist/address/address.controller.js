"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAddress = exports.updateAddress = exports.createAddress = exports.getAddress = exports.listAddress = void 0;
const address_service_1 = require("./address.service");
const listAddress = async (c) => {
    try {
        //limit the number of Address to be returned
        const limit = Number(c.req.query('limit'));
        const data = await (0, address_service_1.addressService)(limit);
        if (data == null || data.length == 0) {
            return c.text("Address not found", 404);
        }
        return c.json(data, 200);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.listAddress = listAddress;
const getAddress = async (c) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id))
        return c.text("Invalid ID", 400);
    const address = await (0, address_service_1.getAddressService)(id);
    if (address == undefined) {
        return c.text("Address not found", 404);
    }
    return c.json(address, 200);
};
exports.getAddress = getAddress;
const createAddress = async (c) => {
    try {
        const address = await c.req.json();
        const createdAddress = await (0, address_service_1.createAddressService)(address);
        if (!createdAddress)
            return c.text("Address not created", 404);
        return c.json({ msg: createdAddress }, 201);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.createAddress = createAddress;
const updateAddress = async (c) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id))
        return c.text("Invalid ID", 400);
    const address = await c.req.json();
    try {
        // search for the Address
        const searchedAddress = await (0, address_service_1.getAddressService)(id);
        if (searchedAddress == undefined)
            return c.text("Address not found", 404);
        // get the data and update it
        const res = await (0, address_service_1.updateAddressService)(id, address);
        // return a success message
        if (!res)
            return c.text("Address not updated", 404);
        return c.json({ msg: res }, 201);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.updateAddress = updateAddress;
const deleteAddress = async (c) => {
    const id = Number(c.req.param("id"));
    if (isNaN(id))
        return c.text("Invalid ID", 400);
    try {
        //search for the Address
        const address = await (0, address_service_1.getAddressService)(id);
        if (address == undefined)
            return c.text("Address not found", 404);
        //deleting the Address
        const res = await (0, address_service_1.deleteAddressService)(id);
        if (!res)
            return c.text("Address not deleted", 404);
        return c.json({ msg: res }, 201);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.deleteAddress = deleteAddress;
