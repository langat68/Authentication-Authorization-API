"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteRestaurantService = exports.updateRestaurantService = exports.createRestaurantService = exports.getRestaurantService = exports.restaurantService = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const db_1 = __importDefault(require("../drizzle/db"));
const schema_1 = require("../drizzle/schema");
const restaurantService = async (limit) => {
    if (limit) {
        return await db_1.default.query.tableRestaurant.findMany({
            limit: limit
        });
    }
    return await db_1.default.query.tableRestaurant.findMany();
};
exports.restaurantService = restaurantService;
const getRestaurantService = async (id) => {
    return await db_1.default.query.tableRestaurant.findFirst({
        where: (0, drizzle_orm_1.eq)(schema_1.tableRestaurant.id, id)
    });
};
exports.getRestaurantService = getRestaurantService;
const createRestaurantService = async (restaurant) => {
    await db_1.default.insert(schema_1.tableRestaurant).values(restaurant);
    return "restaurant created successfully";
};
exports.createRestaurantService = createRestaurantService;
const updateRestaurantService = async (id, restaurant) => {
    await db_1.default.update(schema_1.tableRestaurant).set(restaurant).where((0, drizzle_orm_1.eq)(schema_1.tableRestaurant.id, id));
    return "restaurant updated successfully";
};
exports.updateRestaurantService = updateRestaurantService;
const deleteRestaurantService = async (id) => {
    await db_1.default.delete(schema_1.tableRestaurant).where((0, drizzle_orm_1.eq)(schema_1.tableRestaurant.id, id));
    return "restaurant deleted successfully";
};
exports.deleteRestaurantService = deleteRestaurantService;
