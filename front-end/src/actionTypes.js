/*
  async action types
  https://redux.js.org/docs/advanced/AsyncActions.html
*/

// teams
export const FETCH_TEAMS = "FETCH_TEAMS";
export const FETCH_TEAM = "FETCH_TEAM";
export const CREATE_TEAM = "CREATE_TEAM";
export const DELETE_TEAM = "DELETE_TEAM";
export const UPDATE_TEAM = "UPDATE_TEAM";
export const CHANGE_TEAM = "CHANGE_TEAM";


// teams members
export const FETCH_TEAM_MEMBERS = "FETCH_TEAM_MEMBERS";
export const FETCH_TEAM_MEMBER = "FETCH_TEAM_MEMBER";
export const CREATE_TEAM_MEMBER = "CREATE_TEAM_MEMBER";
export const DELETE_TEAM_MEMBER = "DELETE_TEAM_MEMBER";
export const UPDATE_TEAM_MEMBER = "UPDATE_TEAM_MEMBER";

// roles
export const FETCH_ROLES = "FETCH_ROLES";

// fetch
export const FETCH_DATA = "FETCH_DATA";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_ERROR = "FETCH_DATA_ERROR";