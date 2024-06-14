"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteMenuItemService = exports.updateMenuItemService = exports.createMenuItemService = exports.getMenuItemService = exports.menuItemService = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const db_1 = __importDefault(require("../drizzle/db"));
const schema_1 = require("../drizzle/schema");
const menuItemService = async (limit) => {
    if (limit) {
        return await db_1.default.query.tableMenuItem.findMany({
            limit: limit
        });
    }
    return await db_1.default.query.tableMenuItem.findMany();
};
exports.menuItemService = menuItemService;
const getMenuItemService = async (id) => {
    return await db_1.default.query.tableMenuItem.findFirst({
        where: (0, drizzle_orm_1.eq)(schema_1.tableMenuItem.id, id)
    });
};
exports.getMenuItemService = getMenuItemService;
const createMenuItemService = async (menuItem) => {
    await db_1.default.insert(schema_1.tableMenuItem).values(menuItem);
    return "menuItem created successfully";
};
exports.createMenuItemService = createMenuItemService;
const updateMenuItemService = async (id, menuItem) => {
    await db_1.default.update(schema_1.tableMenuItem).set(menuItem).where((0, drizzle_orm_1.eq)(schema_1.tableMenuItem.id, id));
    return "menuItem updated successfully";
};
exports.updateMenuItemService = updateMenuItemService;
const deleteMenuItemService = async (id) => {
    await db_1.default.delete(schema_1.tableMenuItem).where((0, drizzle_orm_1.eq)(schema_1.tableMenuItem.id, id));
    return "menuItem deleted successfully";
};
exports.deleteMenuItemService = deleteMenuItemService;
