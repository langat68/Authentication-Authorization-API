"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthOnUsersRelations = exports.AuthOnTableUsers = exports.roleEnum = exports.statusCatalog = exports.orderStatus = exports.comments = exports.driver = exports.order = exports.restaurantOwner = exports.users = exports.ordermenuItem = exports.category_menuItem = exports.menu_item_restaurant = exports.address_city = exports.restaurant_city = exports.state_cities = exports.state_city = exports.tableOrderMenuItem = exports.tableComment = exports.tableOrderStatus = exports.tableOrders = exports.tableAddress = exports.tableRestaurantOwner = exports.tableDriver = exports.tableUsers = exports.tableStatusCatalog = exports.tableMenuItem = exports.tableCategory = exports.tableRestaurant = exports.tableCity = exports.tableState = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
const drizzle_orm_1 = require("drizzle-orm");
//state table
exports.tableState = (0, pg_core_1.pgTable)("state", {
    id: (0, pg_core_1.serial)("id").primaryKey(),
    name: (0, pg_core_1.text)("name"),
    code: (0, pg_core_1.text)("code")
});
//city table
exports.tableCity = (0, pg_core_1.pgTable)("city", {
    id: (0, pg_core_1.serial)("id").primaryKey(),
    name: (0, pg_core_1.text)("name"),
    address: (0, pg_core_1.text)("address"),
    state_id: (0, pg_core_1.integer)("state_id").notNull().references(() => exports.tableState.id, { onDelete: "cascade" })
});
//restaurant table
exports.tableRestaurant = (0, pg_core_1.pgTable)("restaurant", {
    id: (0, pg_core_1.serial)("id").primaryKey(),
    name: (0, pg_core_1.text)("name"),
    street_address: (0, pg_core_1.text)("street_address"),
    zip_code: (0, pg_core_1.text)("zip_code"),
    created_at: (0, pg_core_1.timestamp)("created_at", { mode: "string" }).notNull().defaultNow(),
    updated_at: (0, pg_core_1.timestamp)("updated_at", { mode: "string" }).notNull().defaultNow(),
    city_id: (0, pg_core_1.integer)("city_id").notNull().references(() => exports.tableCity.id, { onDelete: "cascade" })
});
//category table
exports.tableCategory = (0, pg_core_1.pgTable)("category", {
    id: (0, pg_core_1.serial)("id").primaryKey(),
    name: (0, pg_core_1.text)("name")
});
//menu_item table
exports.tableMenuItem = (0, pg_core_1.pgTable)("menu_item", {
    id: (0, pg_core_1.serial)("id").primaryKey(),
    name: (0, pg_core_1.text)("name"),
    description: (0, pg_core_1.text)("description"),
    ingredients: (0, pg_core_1.text)("ingredients"),
    price: (0, pg_core_1.decimal)("price"),
    active: (0, pg_core_1.boolean)("active"),
    created_at: (0, pg_core_1.timestamp)("created_at", { mode: "string" }).notNull().defaultNow(),
    updated_at: (0, pg_core_1.timestamp)("updated_at", { mode: "string" }).notNull().defaultNow(),
    restaurant_id: (0, pg_core_1.integer)("restaurant_id").notNull().references(() => exports.tableRestaurant.id, { onDelete: "cascade" }),
    category_id: (0, pg_core_1.integer)("category_id").notNull().references(() => exports.tableCategory.id, { onDelete: "cascade" })
});
//status_catalog table
exports.tableStatusCatalog = (0, pg_core_1.pgTable)("status_catalog", {
    id: (0, pg_core_1.serial)("id").primaryKey(),
    name: (0, pg_core_1.text)("name")
});
//users table
exports.tableUsers = (0, pg_core_1.pgTable)("users", {
    id: (0, pg_core_1.serial)("id").primaryKey(),
    name: (0, pg_core_1.text)("name"),
    contact_phone: (0, pg_core_1.text)("contact_phone"),
    phone_verified: (0, pg_core_1.boolean)("phone_verified"),
    email: (0, pg_core_1.varchar)("email"),
    email_verified: (0, pg_core_1.boolean)("email_verified"),
    confirmation_code: (0, pg_core_1.text)(" confirmation_code"),
    password: (0, pg_core_1.varchar)("password"),
    created_at: (0, pg_core_1.timestamp)("created_at", { mode: "string" }).notNull().defaultNow(),
    updated_at: (0, pg_core_1.timestamp)("updated_at", { mode: "string" }).notNull().defaultNow()
});
//driver table
exports.tableDriver = (0, pg_core_1.pgTable)("driver", {
    id: (0, pg_core_1.serial)("id").primaryKey(),
    car_make: (0, pg_core_1.text)("car_make"),
    car_model: (0, pg_core_1.text)("car_model"),
    car_year: (0, pg_core_1.integer)("car_year"),
    online: (0, pg_core_1.boolean)("online"),
    delivering: (0, pg_core_1.boolean)("delivering"),
    created_at: (0, pg_core_1.timestamp)("created_at", { mode: "string" }).notNull().defaultNow(),
    updated_at: (0, pg_core_1.timestamp)("updated_at", { mode: "string" }).notNull().defaultNow(),
    user_id: (0, pg_core_1.integer)("user_id").notNull().references(() => exports.tableUsers.id, { onDelete: "cascade" })
});
//restaurant_owner table
exports.tableRestaurantOwner = (0, pg_core_1.pgTable)("restaurant_owner", {
    id: (0, pg_core_1.serial)("id").primaryKey(),
    owner_id: (0, pg_core_1.integer)("owner_id").notNull().references(() => exports.tableUsers.id, { onDelete: "cascade" }),
    restaurant_id: (0, pg_core_1.integer)("restaurant_id").notNull().references(() => exports.tableRestaurant.id, { onDelete: "cascade" })
});
//address table
exports.tableAddress = (0, pg_core_1.pgTable)("address", {
    id: (0, pg_core_1.serial)("id").primaryKey(),
    street_address_1: (0, pg_core_1.text)("street_address_1"),
    street_address_2: (0, pg_core_1.text)("street_address_2"),
    zip_code: (0, pg_core_1.text)("zip_code"),
    delivery_instructions: (0, pg_core_1.text)("delivery_instructions"),
    created_at: (0, pg_core_1.timestamp)("created_at", { mode: "string" }).notNull().defaultNow(),
    updated_at: (0, pg_core_1.timestamp)("updated_at", { mode: "string" }).notNull().defaultNow(),
    user_id: (0, pg_core_1.integer)("user_id").notNull().references(() => exports.tableUsers.id, { onDelete: "cascade" }),
    city_id: (0, pg_core_1.integer)("city_id").notNull().references(() => exports.tableCity.id, { onDelete: "cascade" })
});
//orders table
exports.tableOrders = (0, pg_core_1.pgTable)("orders", {
    id: (0, pg_core_1.serial)("id").primaryKey(),
    estimated_delivery_time: (0, pg_core_1.timestamp)("estimated_delivery_time"),
    actual_delivery_time: (0, pg_core_1.timestamp)("actual_delivery_time"),
    price: (0, pg_core_1.decimal)("price"),
    discount: (0, pg_core_1.decimal)("discount"),
    final_price: (0, pg_core_1.decimal)("final_price"),
    comment: (0, pg_core_1.text)("comment"),
    created_at: (0, pg_core_1.timestamp)("created_at", { mode: "string" }).notNull().defaultNow(),
    updated_at: (0, pg_core_1.timestamp)("updated_at", { mode: "string" }).notNull().defaultNow(),
    restaurant_id: (0, pg_core_1.integer)("restaurant_id").notNull().references(() => exports.tableRestaurant.id, { onDelete: "cascade" }),
    delivery_address_id: (0, pg_core_1.integer)("delivery_address_id").notNull().references(() => exports.tableAddress.id, { onDelete: "cascade" }),
    user_id: (0, pg_core_1.integer)("user_id").notNull().references(() => exports.tableUsers.id, { onDelete: "cascade" }),
    driver_id: (0, pg_core_1.integer)("driver_id").notNull().references(() => exports.tableDriver.id, { onDelete: "cascade" })
});
//order_status table
exports.tableOrderStatus = (0, pg_core_1.pgTable)("order_status", {
    id: (0, pg_core_1.serial)("id").primaryKey(),
    created_at: (0, pg_core_1.timestamp)("created_at", { mode: "string" }).notNull().defaultNow(),
    // updated_at:timestamp( "updated_at",{mode:"string"}).notNull().defaultNow(),
    order_id: (0, pg_core_1.integer)("order_id").notNull().references(() => exports.tableOrders.id, { onDelete: "cascade" }),
    status_catalog_id: (0, pg_core_1.integer)("status_catalog_id").notNull().references(() => exports.tableStatusCatalog.id, { onDelete: "cascade" })
});
// comment table
exports.tableComment = (0, pg_core_1.pgTable)("comment", {
    id: (0, pg_core_1.serial)("id").primaryKey(),
    comment_text: (0, pg_core_1.text)("comment_text"),
    is_complaint: (0, pg_core_1.boolean)("is_complaint"),
    is_praise: (0, pg_core_1.boolean)("is_praise"),
    created_at: (0, pg_core_1.timestamp)("created_at", { mode: "string" }).notNull().defaultNow(),
    updated_at: (0, pg_core_1.timestamp)("updated_at", { mode: "string" }).notNull().defaultNow(),
    order_id: (0, pg_core_1.integer)("order_id").notNull().references(() => exports.tableOrders.id, { onDelete: "cascade" }),
    user_id: (0, pg_core_1.integer)("user_id").notNull().references(() => exports.tableUsers.id, { onDelete: "cascade" })
});
//order menu item
exports.tableOrderMenuItem = (0, pg_core_1.pgTable)("order_menu_item", {
    id: (0, pg_core_1.serial)("id").primaryKey(),
    quantity: (0, pg_core_1.integer)("quantity"),
    item_price: (0, pg_core_1.decimal)("item_price"),
    price: (0, pg_core_1.decimal)("price"),
    order_id: (0, pg_core_1.integer)("order_id").notNull().references(() => exports.tableOrders.id, { onDelete: "cascade" }),
    menu_item_id: (0, pg_core_1.integer)("menu_item_id").notNull().references(() => exports.tableMenuItem.id, { onDelete: "cascade" })
});
// Relationship:  state-city
exports.state_city = (0, drizzle_orm_1.relations)(exports.tableState, ({ one }) => ({
    city: one(exports.tableCity, {
        fields: [exports.tableState.id],
        references: [exports.tableCity.state_id],
    })
}));
// Relationship:  city-state(1-*) city-restaurant city-address
exports.state_cities = (0, drizzle_orm_1.relations)(exports.tableCity, ({ many, one }) => ({
    state: many(exports.tableState),
    restaurants: one(exports.tableRestaurant, {
        fields: [exports.tableCity.id],
        references: [exports.tableRestaurant.city_id]
    }),
    address: one(exports.tableAddress, {
        fields: [exports.tableCity.id],
        references: [exports.tableAddress.city_id]
    })
}));
// Relationship: Restaurant - city(*-1) restaurant - menu_item (1-*)
exports.restaurant_city = (0, drizzle_orm_1.relations)(exports.tableRestaurant, ({ many, one }) => ({
    city: many(exports.tableCity),
    rastaurant_owner: one(exports.tableRestaurantOwner, {
        fields: [exports.tableRestaurant.id],
        references: [exports.tableRestaurantOwner.restaurant_id],
    }),
    menu_item: one(exports.tableMenuItem, {
        fields: [exports.tableRestaurant.id],
        references: [exports.tableMenuItem.restaurant_id],
    }),
    orders: one(exports.tableOrders, {
        fields: [exports.tableRestaurant.id],
        references: [exports.tableOrders.restaurant_id],
    })
}));
// Relationship: Address - address(1-1)
exports.address_city = (0, drizzle_orm_1.relations)(exports.tableAddress, ({ many, one }) => ({
    city: many(exports.tableCity),
    users: many(exports.tableUsers),
    orders: one(exports.tableOrders, {
        fields: [exports.tableAddress.id],
        references: [exports.tableOrders.delivery_address_id],
    })
}));
//relationship   menu_item 
exports.menu_item_restaurant = (0, drizzle_orm_1.relations)(exports.tableMenuItem, ({ many, one }) => ({
    restaurants: many(exports.tableRestaurant),
    category: many(exports.tableCategory),
    order_menu_item: one(exports.tableOrderMenuItem, {
        fields: [exports.tableMenuItem.id],
        references: [exports.tableOrderMenuItem.menu_item_id],
    })
}));
//relationship category
exports.category_menuItem = (0, drizzle_orm_1.relations)(exports.tableCategory, ({ one }) => ({
    menu_item: one(exports.tableMenuItem, {
        fields: [exports.tableCategory.id],
        references: [exports.tableMenuItem.category_id]
    })
}));
//relationship orders_menu_item 
exports.ordermenuItem = (0, drizzle_orm_1.relations)(exports.tableOrderMenuItem, ({ many }) => ({
    orders: many(exports.tableOrders),
    menu_item: many(exports.tableMenuItem)
}));
//relationship users
exports.users = (0, drizzle_orm_1.relations)(exports.tableUsers, ({ one }) => ({
    rastaurant_owner: one(exports.tableRestaurantOwner, {
        fields: [exports.tableUsers.id],
        references: [exports.tableRestaurantOwner.owner_id],
    }),
    orders: one(exports.tableOrders, {
        fields: [exports.tableUsers.id],
        references: [exports.tableOrders.user_id],
    }),
    address: one(exports.tableAddress, {
        fields: [exports.tableUsers.id],
        references: [exports.tableAddress.user_id],
    }),
    driver: one(exports.tableDriver, {
        fields: [exports.tableUsers.id],
        references: [exports.tableDriver.user_id],
    }),
    comment: one(exports.tableComment, {
        fields: [exports.tableUsers.id],
        references: [exports.tableComment.user_id],
    })
}));
//relationship restaurant_owner (1-*)
exports.restaurantOwner = (0, drizzle_orm_1.relations)(exports.tableRestaurantOwner, ({ many }) => ({
    users: many(exports.tableUsers),
    restaurant: many(exports.tableRestaurant)
}));
//relationship order
exports.order = (0, drizzle_orm_1.relations)(exports.tableOrders, ({ one, many }) => ({
    order_menu_item: one(exports.tableOrderMenuItem, {
        fields: [exports.tableOrders.id],
        references: [exports.tableOrderMenuItem.menu_item_id],
    }),
    order_status: one(exports.tableOrderStatus, {
        fields: [exports.tableOrders.id],
        references: [exports.tableOrderStatus.order_id],
    }),
    comment: one(exports.tableComment, {
        fields: [exports.tableOrders.id],
        references: [exports.tableComment.order_id],
    }),
    driver: many(exports.tableDriver),
    users: many(exports.tableUsers),
    address: many(exports.tableAddress),
    restaurant: many(exports.tableRestaurant)
}));
//relationship driver
exports.driver = (0, drizzle_orm_1.relations)(exports.tableDriver, ({ one, many }) => ({
    users: many(exports.tableUsers),
    orders: one(exports.tableOrders, {
        fields: [exports.tableDriver.id],
        references: [exports.tableOrders.driver_id],
    })
}));
//relationship comments 
exports.comments = (0, drizzle_orm_1.relations)(exports.tableComment, ({ many }) => ({
    users: many(exports.tableUsers),
    orders: many(exports.tableOrders)
}));
//relationship order_status 
exports.orderStatus = (0, drizzle_orm_1.relations)(exports.tableOrderStatus, ({ one, many }) => ({
    orders: many(exports.tableOrders),
    status_catalog: many(exports.tableStatusCatalog)
}));
//relationship  status_catalog 
exports.statusCatalog = (0, drizzle_orm_1.relations)(exports.tableStatusCatalog, ({ one }) => ({
    order_status: one(exports.tableOrderStatus, {
        fields: [exports.tableStatusCatalog.id],
        references: [exports.tableOrderStatus.status_catalog_id],
    })
}));
exports.roleEnum = (0, pg_core_1.pgEnum)("role", ["admin", "user"]);
exports.AuthOnTableUsers = (0, pg_core_1.pgTable)("auth_on_users", {
    id: (0, pg_core_1.serial)("id").primaryKey(),
    userId: (0, pg_core_1.integer)("user_id").notNull().references(() => exports.tableUsers.id, { onDelete: "cascade" }),
    password: (0, pg_core_1.varchar)("password", { length: 100 }),
    email: (0, pg_core_1.varchar)("email", { length: 100 }),
    role: (0, exports.roleEnum)("role").default("user")
});
exports.AuthOnUsersRelations = (0, drizzle_orm_1.relations)(exports.AuthOnTableUsers, ({ one }) => ({
    user: one(exports.tableUsers, {
        fields: [exports.AuthOnTableUsers.userId],
        references: [exports.tableUsers.id]
    })
}));
