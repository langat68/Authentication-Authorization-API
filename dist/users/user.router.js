"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const hono_1 = require("hono");
const user_controller_1 = require("./user.controller");
const bearAuth_1 = require("../middleware/bearAuth");
exports.userRouter = new hono_1.Hono();
//get all users      api/users
exports.userRouter.get("/users", bearAuth_1.adminRoleAuth, user_controller_1.listUsers);
//get a single user    api/users/1
exports.userRouter.get("/users/:id", bearAuth_1.userRoleAuth, bearAuth_1.userAdminRoleAuth, user_controller_1.getUser);
// create a user 
exports.userRouter.post("/users", bearAuth_1.userRoleAuth, bearAuth_1.userAdminRoleAuth, user_controller_1.createUser);
//update a user
exports.userRouter.put("/users/:id", bearAuth_1.adminRoleAuth, user_controller_1.updateUser);
exports.userRouter.delete("/users/:id", bearAuth_1.adminRoleAuth, user_controller_1.deleteUser);
//https:domai.com/api/users?limit=10
