"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCategory = exports.updateCategory = exports.createCategory = exports.getCategory = exports.listCategory = void 0;
const category_service_1 = require("./category.service");
const listCategory = async (c) => {
    try {
        //limit the number of category to be returned
        const limit = Number(c.req.query('limit'));
        const data = await (0, category_service_1.categoryService)(limit);
        if (data == null || data.length == 0) {
            return c.text("category not found", 404);
        }
        return c.json(data, 200);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.listCategory = listCategory;
const getCategory = async (c) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id))
        return c.text("Invalid ID", 400);
    const category = await (0, category_service_1.getCategoryService)(id);
    if (category == undefined) {
        return c.text("category not found", 404);
    }
    return c.json(category, 200);
};
exports.getCategory = getCategory;
const createCategory = async (c) => {
    try {
        const category = await c.req.json();
        const createdCategory = await (0, category_service_1.createCategoryService)(category);
        if (!createdCategory)
            return c.text("category not created", 404);
        return c.json({ msg: createdCategory }, 201);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.createCategory = createCategory;
const updateCategory = async (c) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id))
        return c.text("Invalid ID", 400);
    const category = await c.req.json();
    try {
        // search for the category
        const searchedCategory = await (0, category_service_1.getCategoryService)(id);
        if (searchedCategory == undefined)
            return c.text("category not found", 404);
        // get the data and update it
        const res = await (0, category_service_1.updateCategoryService)(id, category);
        // return a success message
        if (!res)
            return c.text("category not updated", 404);
        return c.json({ msg: res }, 201);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.updateCategory = updateCategory;
const deleteCategory = async (c) => {
    const id = Number(c.req.param("id"));
    if (isNaN(id))
        return c.text("Invalid ID", 400);
    try {
        //search for the category
        const category = await (0, category_service_1.getCategoryService)(id);
        if (category == undefined)
            return c.text("category not found", 404);
        //deleting the category
        const res = await (0, category_service_1.deleteCategoryService)(id);
        if (!res)
            return c.text("category not deleted", 404);
        return c.json({ msg: res }, 201);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.deleteCategory = deleteCategory;
