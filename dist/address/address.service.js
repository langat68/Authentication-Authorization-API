"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAddressService = exports.updateAddressService = exports.createAddressService = exports.getAddressService = exports.addressService = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const db_1 = __importDefault(require("../drizzle/db"));
const schema_1 = require("../drizzle/schema");
const addressService = async (limit) => {
    if (limit) {
        return await db_1.default.query.tableAddress.findMany({
            limit: limit
        });
    }
    return await db_1.default.query.tableAddress.findMany();
};
exports.addressService = addressService;
const getAddressService = async (id) => {
    return await db_1.default.query.tableAddress.findFirst({
        where: (0, drizzle_orm_1.eq)(schema_1.tableAddress.id, id)
    });
};
exports.getAddressService = getAddressService;
const createAddressService = async (address) => {
    await db_1.default.insert(schema_1.tableAddress).values(address);
    return "Address created successfully";
};
exports.createAddressService = createAddressService;
const updateAddressService = async (id, address) => {
    await db_1.default.update(schema_1.tableAddress).set(address).where((0, drizzle_orm_1.eq)(schema_1.tableAddress.id, id));
    return "Address updated successfully";
};
exports.updateAddressService = updateAddressService;
const deleteAddressService = async (id) => {
    await db_1.default.delete(schema_1.tableAddress).where((0, drizzle_orm_1.eq)(schema_1.tableAddress.id, id));
    return "Addressdeleted successfully";
};
exports.deleteAddressService = deleteAddressService;
