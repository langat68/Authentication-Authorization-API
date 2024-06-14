"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteOrderStatusService = exports.updateOrderStatusService = exports.createOrderStatusService = exports.getOrderStatusService = exports.orderStatusService = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const db_1 = __importDefault(require("../drizzle/db"));
const schema_1 = require("../drizzle/schema");
const orderStatusService = async (limit) => {
    if (limit) {
        return await db_1.default.query.tableOrderStatus.findMany({
            limit: limit
        });
    }
    return await db_1.default.query.tableOrderStatus.findMany();
};
exports.orderStatusService = orderStatusService;
const getOrderStatusService = async (id) => {
    return await db_1.default.query.tableOrderStatus.findFirst({
        where: (0, drizzle_orm_1.eq)(schema_1.tableOrderStatus.id, id)
    });
};
exports.getOrderStatusService = getOrderStatusService;
const createOrderStatusService = async (orderStatus) => {
    await db_1.default.insert(schema_1.tableOrderStatus).values(orderStatus);
    return "orderStatus created successfully";
};
exports.createOrderStatusService = createOrderStatusService;
const updateOrderStatusService = async (id, orderStatus) => {
    await db_1.default.update(schema_1.tableOrderStatus).set(orderStatus).where((0, drizzle_orm_1.eq)(schema_1.tableOrderStatus.id, id));
    return "orderStatus updated successfully";
};
exports.updateOrderStatusService = updateOrderStatusService;
const deleteOrderStatusService = async (id) => {
    await db_1.default.delete(schema_1.tableOrderStatus).where((0, drizzle_orm_1.eq)(schema_1.tableOrderStatus.id, id));
    return "orderStatus deleted successfully";
};
exports.deleteOrderStatusService = deleteOrderStatusService;
