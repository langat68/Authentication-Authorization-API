"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteComment = exports.updateComment = exports.createComment = exports.getComment = exports.listComment = void 0;
const comment_service_1 = require("./comment.service");
const listComment = async (c) => {
    try {
        //limit the number of comments to be returned
        const limit = Number(c.req.query('limit'));
        const data = await (0, comment_service_1.commentService)(limit);
        if (data == null || data.length == 0) {
            return c.text("comment not found", 404);
        }
        return c.json(data, 200);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.listComment = listComment;
const getComment = async (c) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id))
        return c.text("Invalid ID", 400);
    const comment = await (0, comment_service_1.getCommentService)(id);
    if (comment == undefined) {
        return c.text("comment not found", 404);
    }
    return c.json(comment, 200);
};
exports.getComment = getComment;
const createComment = async (c) => {
    try {
        const comment = await c.req.json();
        const createdComment = await (0, comment_service_1.createCommentService)(comment);
        if (!createdComment)
            return c.text("Comment not created", 404);
        return c.json({ msg: createdComment }, 201);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.createComment = createComment;
const updateComment = async (c) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id))
        return c.text("Invalid ID", 400);
    const comment = await c.req.json();
    try {
        // search for the comment
        const searchedComment = await (0, comment_service_1.getCommentService)(id);
        if (searchedComment == undefined)
            return c.text("comment not found", 404);
        // get the data and update it
        const res = await (0, comment_service_1.updateCommentService)(id, comment);
        // return a success message
        if (!res)
            return c.text("comment not updated", 404);
        return c.json({ msg: res }, 201);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.updateComment = updateComment;
const deleteComment = async (c) => {
    const id = Number(c.req.param("id"));
    if (isNaN(id))
        return c.text("Invalid ID", 400);
    try {
        //search for the comment
        const comment = await (0, comment_service_1.getCommentService)(id);
        if (comment == undefined)
            return c.text("comment not found", 404);
        //deleting the comment
        const res = await (0, comment_service_1.deleteCommentService)(id);
        if (!res)
            return c.text("comment not deleted", 404);
        return c.json({ msg: res }, 201);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.deleteComment = deleteComment;
