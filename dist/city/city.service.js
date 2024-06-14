"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCityService = exports.updateCityService = exports.createCityService = exports.getCityService = exports.cityService = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const db_1 = __importDefault(require("../drizzle/db"));
const schema_1 = require("../drizzle/schema");
const cityService = async (limit) => {
    if (limit) {
        return await db_1.default.query.tableCity.findMany({
            limit: limit
        });
    }
    return await db_1.default.query.tableCity.findMany();
};
exports.cityService = cityService;
const getCityService = async (id) => {
    return await db_1.default.query.tableCity.findFirst({
        where: (0, drizzle_orm_1.eq)(schema_1.tableCity.id, id)
    });
};
exports.getCityService = getCityService;
const createCityService = async (city) => {
    await db_1.default.insert(schema_1.tableCity).values(city);
    return "city created successfully";
};
exports.createCityService = createCityService;
const updateCityService = async (id, city) => {
    await db_1.default.update(schema_1.tableCity).set(city).where((0, drizzle_orm_1.eq)(schema_1.tableCity.id, id));
    return "city updated successfully";
};
exports.updateCityService = updateCityService;
const deleteCityService = async (id) => {
    await db_1.default.delete(schema_1.tableCity).where((0, drizzle_orm_1.eq)(schema_1.tableCity.id, id));
    return "city deleted successfully";
};
exports.deleteCityService = deleteCityService;
