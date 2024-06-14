"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCategoryService = exports.updateCategoryService = exports.createCategoryService = exports.getCategoryService = exports.categoryService = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const db_1 = __importDefault(require("../drizzle/db"));
const schema_1 = require("../drizzle/schema");
const categoryService = async (limit) => {
    if (limit) {
        return await db_1.default.query.tableCategory.findMany({
            limit: limit
        });
    }
    return await db_1.default.query.tableCategory.findMany();
};
exports.categoryService = categoryService;
const getCategoryService = async (id) => {
    return await db_1.default.query.tableCategory.findFirst({
        where: (0, drizzle_orm_1.eq)(schema_1.tableCategory.id, id)
    });
};
exports.getCategoryService = getCategoryService;
const createCategoryService = async (category) => {
    await db_1.default.insert(schema_1.tableCategory).values(category);
    return "category created successfully";
};
exports.createCategoryService = createCategoryService;
const updateCategoryService = async (id, category) => {
    await db_1.default.update(schema_1.tableCategory).set(category).where((0, drizzle_orm_1.eq)(schema_1.tableCategory.id, id));
    return "category updated successfully";
};
exports.updateCategoryService = updateCategoryService;
const deleteCategoryService = async (id) => {
    await db_1.default.delete(schema_1.tableCategory).where((0, drizzle_orm_1.eq)(schema_1.tableCategory.id, id));
    return "category deleted successfully";
};
exports.deleteCategoryService = deleteCategoryService;
