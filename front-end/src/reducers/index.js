import { combineReducers } from "redux";
import teams from "./teamsReducer";
import teamMembers from "./teamMembersReducer";

const reducers = combineReducers({
  teams,
  teamMembers
});

export default reducers;