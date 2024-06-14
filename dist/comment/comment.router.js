"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.commentRouter = void 0;
const hono_1 = require("hono");
const comment_controller_1 = require("./comment.controller");
exports.commentRouter = new hono_1.Hono();
//get all comment     /comment
exports.commentRouter.get("/comment", comment_controller_1.listComment);
//get a single comment    /comment/1
exports.commentRouter.get("/comment/:id", comment_controller_1.getComment);
// create a comment
exports.commentRouter.post("/comment", comment_controller_1.createComment);
//update a comment
exports.commentRouter.put("/comment/:id", comment_controller_1.updateComment);
exports.commentRouter.delete("/comment/:id", comment_controller_1.deleteComment);
//https:domai.com/comment?limit=10
