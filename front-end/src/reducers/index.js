import { combineReducers } from "redux";
import teams from "./teamsReducer";
import teamMembers from "./teamMembersReducer";
import route from "./routeReducer";
import roles from "./rolesReducer";

const reducers = combineReducers({
  teams,
  teamMembers,
  route,
  roles
});

export default reducers;