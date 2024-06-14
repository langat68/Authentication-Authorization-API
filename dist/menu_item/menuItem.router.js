"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.menuItemRouter = void 0;
const hono_1 = require("hono");
const menuItem_controller_1 = require("./menuItem.controller");
exports.menuItemRouter = new hono_1.Hono();
//get all menuItems      /menuItem
exports.menuItemRouter.get("/menuItem", menuItem_controller_1.listMenuItem);
//get a single menuItem    menuItem/1
exports.menuItemRouter.get("/menuItem/:id", menuItem_controller_1.getMenuItem);
// create a menuItem 
exports.menuItemRouter.post("/menuItem", menuItem_controller_1.createMenuItem);
//update a menuItem
exports.menuItemRouter.put("/menuItem/:id", menuItem_controller_1.updateMenuItem);
exports.menuItemRouter.delete("/menuItem/:id", menuItem_controller_1.deleteMenuItem);
