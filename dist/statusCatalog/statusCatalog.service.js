"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteStatusCatalogService = exports.updateStatusCatalogService = exports.createStatusCatalogService = exports.getStatusCatalogService = exports.statusCatalogService = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const db_1 = __importDefault(require("../drizzle/db"));
const schema_1 = require("../drizzle/schema");
const statusCatalogService = async (limit) => {
    if (limit) {
        return await db_1.default.query.tableStatusCatalog.findMany({
            limit: limit
        });
    }
    return await db_1.default.query.tableStatusCatalog.findMany();
};
exports.statusCatalogService = statusCatalogService;
const getStatusCatalogService = async (id) => {
    return await db_1.default.query.tableStatusCatalog.findFirst({
        where: (0, drizzle_orm_1.eq)(schema_1.tableStatusCatalog.id, id)
    });
};
exports.getStatusCatalogService = getStatusCatalogService;
const createStatusCatalogService = async (statusCatalog) => {
    await db_1.default.insert(schema_1.tableStatusCatalog).values(statusCatalog);
    return "StatusCatalog created successfully";
};
exports.createStatusCatalogService = createStatusCatalogService;
const updateStatusCatalogService = async (id, statusCatalog) => {
    await db_1.default.update(schema_1.tableStatusCatalog).set(statusCatalog).where((0, drizzle_orm_1.eq)(schema_1.tableStatusCatalog.id, id));
    return "StatusCatalog updated successfully";
};
exports.updateStatusCatalogService = updateStatusCatalogService;
const deleteStatusCatalogService = async (id) => {
    await db_1.default.delete(schema_1.tableStatusCatalog).where((0, drizzle_orm_1.eq)(schema_1.tableStatusCatalog.id, id));
    return "StatusCatalog deleted successfully";
};
exports.deleteStatusCatalogService = deleteStatusCatalogService;
