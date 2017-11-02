import { combineReducers } from "redux";
import teams from "./teamsReducer";
import teamMembers from "./teamMembersReducer";
import route from "./routeReducer";

const reducers = combineReducers({
  teams,
  teamMembers,
  route
});

export default reducers;