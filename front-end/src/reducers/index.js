import { combineReducers } from "redux";
import teams from "./teamsReducer";
import teamMembers from "./teamMembersReducer";
import route from "./routeReducer";
import roles from "./rolesReducer";
import loading from "./loadingReducer";

const reducers = combineReducers({
  teams,
  teamMembers,
  route,
  roles,
  loading
});

export default reducers;