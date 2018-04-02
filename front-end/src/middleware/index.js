import thunk from "redux-thunk";
//for debuggin uncomment and add in middleware to work with state
// import logger from "./logger";
import { applyMiddleware } from "redux";

export default applyMiddleware(thunk);
 