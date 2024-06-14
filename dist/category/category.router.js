"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryRouter = void 0;
const hono_1 = require("hono");
const category_controller_1 = require("./category.controller");
exports.categoryRouter = new hono_1.Hono();
//get all category     /category
exports.categoryRouter.get("/category", category_controller_1.listCategory);
//get a single category    /category/1
exports.categoryRouter.get("/category/:id", category_controller_1.getCategory);
// create a category
exports.categoryRouter.post("/category", category_controller_1.createCategory);
//update a category
exports.categoryRouter.put("/category/:id", category_controller_1.updateCategory);
exports.categoryRouter.delete("/category/:id", category_controller_1.deleteCategory);
//https:domai.com/category?limit=10
