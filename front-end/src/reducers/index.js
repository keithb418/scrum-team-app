import { combineReducers } from "redux";
import teams from "./teamsReducer";
import teamMembers from "./teamMembersReducer";
import roles from "./rolesReducer";
import fetch from "./fetchReducer";


const reducers = combineReducers({
  teams,
  teamMembers,
  fetch,
  roles,
});

export default reducers;