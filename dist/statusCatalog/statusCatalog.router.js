"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.statusCatalogRouter = void 0;
const hono_1 = require("hono");
const statusCatalog_controller_1 = require("./statusCatalog.controller");
exports.statusCatalogRouter = new hono_1.Hono();
//get all StatusCatalog   / statusCatalog
exports.statusCatalogRouter.get("/statusCatalog", statusCatalog_controller_1.listStatusCatalog);
//get a single StatusCatalog    /StatusCatalog/1
exports.statusCatalogRouter.get("/statusCatalog/:id", statusCatalog_controller_1.getStatusCatalog);
// create a StatusCatalog
exports.statusCatalogRouter.post("/statusCatalog", statusCatalog_controller_1.createStatusCatalog);
//update a StatusCatalog
exports.statusCatalogRouter.put("/statusCatalog/:id", statusCatalog_controller_1.updateStatusCatalog);
exports.statusCatalogRouter.delete("/statusCatalog/:id", statusCatalog_controller_1.deleteStatusCatalog);
//https:domai.com/statusCatalog?limit=10
