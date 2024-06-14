"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getstatewithcityService = exports.deleteStateService = exports.updateStateService = exports.createStateService = exports.getStateService = exports.stateService = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const db_1 = __importDefault(require("../drizzle/db"));
const schema_1 = require("../drizzle/schema");
const stateService = async (limit) => {
    if (limit) {
        return await db_1.default.query.tableState.findMany({
            limit: limit
        });
    }
    return await db_1.default.query.tableState.findMany();
};
exports.stateService = stateService;
const getStateService = async (id) => {
    return await db_1.default.query.tableState.findFirst({
        where: (0, drizzle_orm_1.eq)(schema_1.tableState.id, id)
    });
};
exports.getStateService = getStateService;
const createStateService = async (state) => {
    await db_1.default.insert(schema_1.tableState).values(state);
    return "state created successfully";
};
exports.createStateService = createStateService;
const updateStateService = async (id, state) => {
    await db_1.default.update(schema_1.tableState).set(state).where((0, drizzle_orm_1.eq)(schema_1.tableState.id, id));
    return "state updated successfully";
};
exports.updateStateService = updateStateService;
const deleteStateService = async (id) => {
    await db_1.default.delete(schema_1.tableState).where((0, drizzle_orm_1.eq)(schema_1.tableState.id, id));
    return "state deleted successfully";
};
exports.deleteStateService = deleteStateService;
// State with city
const getstatewithcityService = async () => {
    return await db_1.default.query.tableState.findMany({
        with: {
            city: true,
        }
    });
};
exports.getstatewithcityService = getstatewithcityService;
