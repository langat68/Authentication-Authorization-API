"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteOrdersService = exports.updateOrdersService = exports.createOrdersService = exports.getOrdersService = exports.ordersService = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const db_1 = __importDefault(require("../drizzle/db"));
const schema_1 = require("../drizzle/schema");
const ordersService = async (limit) => {
    if (limit) {
        return await db_1.default.query.tableOrders.findMany({
            limit: limit
        });
    }
    return await db_1.default.query.tableOrders.findMany();
};
exports.ordersService = ordersService;
const getOrdersService = async (id) => {
    return await db_1.default.query.tableOrders.findFirst({
        where: (0, drizzle_orm_1.eq)(schema_1.tableOrders.id, id)
    });
};
exports.getOrdersService = getOrdersService;
const createOrdersService = async (orders) => {
    await db_1.default.insert(schema_1.tableOrders).values(orders);
    return "order created successfully";
};
exports.createOrdersService = createOrdersService;
const updateOrdersService = async (id, orders) => {
    await db_1.default.update(schema_1.tableOrders).set(orders).where((0, drizzle_orm_1.eq)(schema_1.tableOrders.id, id));
    return "order updated successfully";
};
exports.updateOrdersService = updateOrdersService;
const deleteOrdersService = async (id) => {
    await db_1.default.delete(schema_1.tableOrders).where((0, drizzle_orm_1.eq)(schema_1.tableOrders.id, id));
    return "order deleted successfully";
};
exports.deleteOrdersService = deleteOrdersService;
