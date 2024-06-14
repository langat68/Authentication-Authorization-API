import { Hono } from "hono";
import { listState, getState, createState, updateState, deleteState,getStatewithcity} from "./state.controller"
import { adminRoleAuth,userRoleAuth,userAdminRoleAuth} from "../middleware/bearAuth";
import { zValidator } from "@hono/zod-validator";
import { stateSchema } from "../validators";
export const stateRouter = new Hono();

// //get all states    / state
// stateRouter.get("/state", listState);
// //get a single state    /state/1
// stateRouter.get("/state/:id", getState)
// // create a state
// stateRouter.post("/state", createState)
// //update a state
// stateRouter.put("/state/:id", updateState)

// stateRouter.delete("/state/:id", deleteState)

// //https:domai.com/state?limit=10

// stateRouter.get("/state-with-cities",getStatewithcity)



      //Authentication


//get all states    / state
stateRouter.get("/state", listState);
//get a single state    /state/1
stateRouter.get("/state/:id",userRoleAuth,userAdminRoleAuth, getState);
// create a state
stateRouter.post("/state", adminRoleAuth, createState);
//update a sate
stateRouter.put("/state/:id",adminRoleAuth, updateState);

stateRouter.delete("/state/:id",adminRoleAuth, deleteState);      

stateRouter.get("/state-with-cities",getStatewithcity)



