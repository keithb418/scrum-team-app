import { combineReducers } from "redux";
import teams from "./teamsReducer";
import teamMembers from "./teamMembersReducer";
import roles from "./rolesReducer";
import loading from "./loadingReducer";
import { routerReducer } from "react-router-redux";

const reducers = combineReducers({
  teams,
  teamMembers,
  roles,
  loading,
  router: routerReducer

});

export default reducers;