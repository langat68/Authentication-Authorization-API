"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStatewithcity = exports.deleteState = exports.updateState = exports.createState = exports.getState = exports.listState = void 0;
const state_service_1 = require("./state.service");
const listState = async (c) => {
    try {
        //limit the number of states to be returned
        const limit = Number(c.req.query('limit'));
        const data = await (0, state_service_1.stateService)(limit);
        if (data == null || data.length == 0) {
            return c.text("state not found", 404);
        }
        return c.json(data, 200);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.listState = listState;
const getState = async (c) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id))
        return c.text("Invalid ID", 400);
    const state = await (0, state_service_1.getStateService)(id);
    if (state == undefined) {
        return c.text("state not found", 404);
    }
    return c.json(state, 200);
};
exports.getState = getState;
const createState = async (c) => {
    try {
        const state = await c.req.json();
        const createdState = await (0, state_service_1.createStateService)(state);
        if (!createdState)
            return c.text("state not created", 404);
        return c.json({ msg: createdState }, 201);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.createState = createState;
const updateState = async (c) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id))
        return c.text("Invalid ID", 400);
    const state = await c.req.json();
    try {
        // search for the state
        const searchedState = await (0, state_service_1.getStateService)(id);
        if (searchedState == undefined)
            return c.text("state not found", 404);
        // get the data and update it
        const res = await (0, state_service_1.updateStateService)(id, state);
        // return a success message
        if (!res)
            return c.text("state not updated", 404);
        return c.json({ msg: res }, 201);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.updateState = updateState;
const deleteState = async (c) => {
    const id = Number(c.req.param("id"));
    if (isNaN(id))
        return c.text("Invalid ID", 400);
    try {
        //search for the state
        const state = await (0, state_service_1.getStateService)(id);
        if (state == undefined)
            return c.text("state not found", 404);
        //deleting the state
        const res = await (0, state_service_1.deleteStateService)(id);
        if (!res)
            return c.text("state not deleted", 404);
        return c.json({ msg: res }, 201);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.deleteState = deleteState;
// state-city
const getStatewithcity = async (c) => {
    try {
        const data = await (0, state_service_1.getstatewithcityService)();
        if (data == null) {
            return c.text("state not found", 404);
        }
        return c.json(data, 200);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.getStatewithcity = getStatewithcity;
