"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteOrderMenuItemService = exports.updateOrderMenuItemService = exports.createOrderMenuItemService = exports.getOrderMenuItemService = exports.orderMenuItemService = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const db_1 = __importDefault(require("../drizzle/db"));
const schema_1 = require("../drizzle/schema");
const orderMenuItemService = async (limit) => {
    if (limit) {
        return await db_1.default.query.tableOrderMenuItem.findMany({
            limit: limit
        });
    }
    return await db_1.default.query.tableOrderMenuItem.findMany();
};
exports.orderMenuItemService = orderMenuItemService;
const getOrderMenuItemService = async (id) => {
    return await db_1.default.query.tableOrderMenuItem.findFirst({
        where: (0, drizzle_orm_1.eq)(schema_1.tableOrderMenuItem.id, id)
    });
};
exports.getOrderMenuItemService = getOrderMenuItemService;
const createOrderMenuItemService = async (orderMenuItem) => {
    await db_1.default.insert(schema_1.tableOrderMenuItem).values(orderMenuItem);
    return "orderMenuItem created successfully";
};
exports.createOrderMenuItemService = createOrderMenuItemService;
const updateOrderMenuItemService = async (id, orderMenuItem) => {
    await db_1.default.update(schema_1.tableOrderMenuItem).set(orderMenuItem).where((0, drizzle_orm_1.eq)(schema_1.tableOrderMenuItem.id, id));
    return "OrderMenuItem updated successfully";
};
exports.updateOrderMenuItemService = updateOrderMenuItemService;
const deleteOrderMenuItemService = async (id) => {
    await db_1.default.delete(schema_1.tableOrderMenuItem).where((0, drizzle_orm_1.eq)(schema_1.tableOrderMenuItem.id, id));
    return "ordermenuItem deleted successfully";
};
exports.deleteOrderMenuItemService = deleteOrderMenuItemService;
