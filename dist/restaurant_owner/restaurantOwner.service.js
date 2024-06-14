"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteRestaurantOwnerService = exports.updateRestaurantOwnerService = exports.createRestaurantOwnerService = exports.getRestaurantOwnerService = exports.restaurantOwnerService = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const db_1 = __importDefault(require("../drizzle/db"));
const schema_1 = require("../drizzle/schema");
const restaurantOwnerService = async (limit) => {
    if (limit) {
        return await db_1.default.query.tableOrderMenuItem.findMany({
            limit: limit
        });
    }
    return await db_1.default.query.tableRestaurantOwner.findMany();
};
exports.restaurantOwnerService = restaurantOwnerService;
const getRestaurantOwnerService = async (id) => {
    return await db_1.default.query.tableRestaurantOwner.findFirst({
        where: (0, drizzle_orm_1.eq)(schema_1.tableRestaurantOwner.id, id)
    });
};
exports.getRestaurantOwnerService = getRestaurantOwnerService;
const createRestaurantOwnerService = async (restaurantOwner) => {
    await db_1.default.insert(schema_1.tableRestaurantOwner).values(restaurantOwner);
    return " restaurantOwner created successfully";
};
exports.createRestaurantOwnerService = createRestaurantOwnerService;
const updateRestaurantOwnerService = async (id, restaurantOwner) => {
    await db_1.default.update(schema_1.tableRestaurantOwner).set(restaurantOwner).where((0, drizzle_orm_1.eq)(schema_1.tableRestaurantOwner.id, id));
    return "restaurantOwner updated successfully";
};
exports.updateRestaurantOwnerService = updateRestaurantOwnerService;
const deleteRestaurantOwnerService = async (id) => {
    await db_1.default.delete(schema_1.tableRestaurantOwner).where((0, drizzle_orm_1.eq)(schema_1.tableRestaurantOwner.id, id));
    return "restaurantOwner deleted successfully";
};
exports.deleteRestaurantOwnerService = deleteRestaurantOwnerService;
