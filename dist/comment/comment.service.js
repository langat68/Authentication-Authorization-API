"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCommentService = exports.updateCommentService = exports.createCommentService = exports.getCommentService = exports.commentService = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const db_1 = __importDefault(require("../drizzle/db"));
const schema_1 = require("../drizzle/schema");
const commentService = async (limit) => {
    if (limit) {
        return await db_1.default.query.tableComment.findMany({
            limit: limit
        });
    }
    return await db_1.default.query.tableComment.findMany();
};
exports.commentService = commentService;
const getCommentService = async (id) => {
    return await db_1.default.query.tableComment.findFirst({
        where: (0, drizzle_orm_1.eq)(schema_1.tableComment.id, id)
    });
};
exports.getCommentService = getCommentService;
const createCommentService = async (comment) => {
    await db_1.default.insert(schema_1.tableComment).values(comment);
    return "comment created successfully";
};
exports.createCommentService = createCommentService;
const updateCommentService = async (id, comment) => {
    await db_1.default.update(schema_1.tableComment).set(comment).where((0, drizzle_orm_1.eq)(schema_1.tableComment.id, id));
    return "comment updated successfully";
};
exports.updateCommentService = updateCommentService;
const deleteCommentService = async (id) => {
    await db_1.default.delete(schema_1.tableComment).where((0, drizzle_orm_1.eq)(schema_1.tableComment.id, id));
    return "comment deleted successfully";
};
exports.deleteCommentService = deleteCommentService;
