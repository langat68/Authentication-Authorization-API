"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUserService = exports.updateUserService = exports.createUserService = exports.getUserService = exports.usersService = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const db_1 = __importDefault(require("../drizzle/db"));
const schema_1 = require("../drizzle/schema");
const usersService = async (limit) => {
    if (limit) {
        return await db_1.default.query.tableUsers.findMany({
            limit: limit
        });
    }
    return await db_1.default.query.tableUsers.findMany();
};
exports.usersService = usersService;
const getUserService = async (id) => {
    return await db_1.default.query.tableUsers.findFirst({
        where: (0, drizzle_orm_1.eq)(schema_1.tableUsers.id, id)
    });
};
exports.getUserService = getUserService;
const createUserService = async (user) => {
    await db_1.default.insert(schema_1.tableUsers).values(user);
    return "User created successfully";
};
exports.createUserService = createUserService;
const updateUserService = async (id, user) => {
    await db_1.default.update(schema_1.tableUsers).set(user).where((0, drizzle_orm_1.eq)(schema_1.tableUsers.id, id));
    return "User updated successfully";
};
exports.updateUserService = updateUserService;
const deleteUserService = async (id) => {
    await db_1.default.delete(schema_1.tableUsers).where((0, drizzle_orm_1.eq)(schema_1.tableUsers.id, id));
    return "User deleted successfully";
};
exports.deleteUserService = deleteUserService;
