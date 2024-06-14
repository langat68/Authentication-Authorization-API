"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_server_1 = require("@hono/node-server");
const hono_1 = require("hono");
require("dotenv/config");
const logger_1 = require("hono/logger");
const csrf_1 = require("hono/csrf");
const trailing_slash_1 = require("hono/trailing-slash");
const timeout_1 = require("hono/timeout");
const http_exception_1 = require("hono/http-exception");
const prometheus_1 = require("@hono/prometheus");
const user_router_1 = require("./users/user.router");
const state_router_1 = require("./state/state.router");
const statusCatalog_router_1 = require("./statusCatalog/statusCatalog.router");
const restaurantOwner_router_1 = require("./restaurant_owner/restaurantOwner.router");
const restaurant_router_1 = require("./restaurant/restaurant.router");
const orders_router_1 = require("./orders/orders.router");
const orderStatus_router_1 = require("./order_status/orderStatus.router");
const orderMenuItem_router_1 = require("./order_menu_item/orderMenuItem.router");
const menuItem_router_1 = require("./menu_item/menuItem.router");
const driver_router_1 = require("./driver/driver.router");
const comment_router_1 = require("./comment/comment.router");
const city_router_1 = require("./city/city.router");
const category_router_1 = require("./category/category.router");
const address_router_1 = require("./address/address.router");
const auth_router_1 = require("./auth/auth.router");
const app = new hono_1.Hono();
const customTimeoutException = () => new http_exception_1.HTTPException(408, {
    message: `Request timeout `,
});
const { printMetrics, registerMetrics } = (0, prometheus_1.prometheus)();
// inbuilt middlewares
app.use((0, logger_1.logger)()); //logs request and response to the console
app.use((0, csrf_1.csrf)()); //prevents CSRF attacks by checking request headers.
app.use((0, trailing_slash_1.trimTrailingSlash)()); //removes trailing slashes from the request URL
app.use('/', (0, timeout_1.timeout)(10000, customTimeoutException));
//3rd party middlewares
app.use('*', registerMetrics);
// default route
app.get('/ok', (c) => {
    return c.text('The server is running!');
});
app.get('/timeout', async (c) => {
    await new Promise((resolve) => setTimeout(resolve, 11000));
    return c.text("data after 5 seconds", 200);
});
app.get('/metrics', printMetrics);
// custom route
app.route("/", user_router_1.userRouter); // /users
app.route("/", statusCatalog_router_1.statusCatalogRouter); // /statusCatalog
app.route("/", state_router_1.stateRouter); // /state
app.route("/", restaurantOwner_router_1.restaurantOwnerRouter); // /restaurantOwner
app.route("/", restaurant_router_1.restaurantRouter); // /restaurant
app.route("/", orders_router_1.ordersRouter); // /orders
app.route("/", orderStatus_router_1.orderStatusRouter); // /orderstatus
app.route("/", orderMenuItem_router_1.orderMenuItemRouter); // /orderMenuItem
app.route("/", menuItem_router_1.menuItemRouter); // /menuItem
app.route("/", driver_router_1.driverRouter); // /driver
app.route("/", comment_router_1.commentRouter); // /comment
app.route("/", city_router_1.cityRouter); // /city
app.route("/", category_router_1.categoryRouter); // /category
app.route("/", address_router_1.addressRouter); // /address
app.route("/", auth_router_1.authRouter);
(0, node_server_1.serve)({
    fetch: app.fetch,
    port: Number(process.env.PORT)
});
console.log(`Server is running on port ${process.env.PORT}`);
