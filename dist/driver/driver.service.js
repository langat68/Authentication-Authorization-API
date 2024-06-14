"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteDriverService = exports.updateDriverService = exports.createDriverService = exports.getDriverService = exports.driverService = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const db_1 = __importDefault(require("../drizzle/db"));
const schema_1 = require("../drizzle/schema");
const driverService = async (limit) => {
    if (limit) {
        return await db_1.default.query.tableDriver.findMany({
            limit: limit
        });
    }
    return await db_1.default.query.tableDriver.findMany();
};
exports.driverService = driverService;
const getDriverService = async (id) => {
    return await db_1.default.query.tableDriver.findFirst({
        where: (0, drizzle_orm_1.eq)(schema_1.tableDriver.id, id)
    });
};
exports.getDriverService = getDriverService;
const createDriverService = async (driver) => {
    await db_1.default.insert(schema_1.tableDriver).values(driver);
    return "driver created successfully";
};
exports.createDriverService = createDriverService;
const updateDriverService = async (id, driver) => {
    await db_1.default.update(schema_1.tableDriver).set(driver).where((0, drizzle_orm_1.eq)(schema_1.tableDriver.id, id));
    return "driver updated successfully";
};
exports.updateDriverService = updateDriverService;
const deleteDriverService = async (id) => {
    await db_1.default.delete(schema_1.tableDriver).where((0, drizzle_orm_1.eq)(schema_1.tableDriver.id, id));
    return "driver deleted successfully";
};
exports.deleteDriverService = deleteDriverService;
