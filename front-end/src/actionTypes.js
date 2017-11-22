/*
  async action types
  https://redux.js.org/docs/advanced/AsyncActions.html
*/

// routes
export const CHANGE_ROUTE = "CHANGE_ROUTE";

// teams
export const FETCH_TEAMS_REQUEST = "FETCH_TEAMS_REQUEST";
export const FETCH_TEAMS_SUCCESS = "FETCH_TEAMS_SUCCESS";
export const FETCH_TEAMS_FAILURE = "FETCH_TEAMS_FAILURE";

export const ADD_TEAM = "ADD_TEAM";
export const UPDATE_TEAMS = "UPDATE_TEAMS";

// teams members
export const FETCH_TEAM_MEMBERS_REQUEST = "FETCH_TEAM_MEMBERS_REQUEST";
export const FETCH_TEAM_MEMBERS_SUCCESS = "FETCH_TEAM_MEMBERS_SUCCESS";
export const FETCH_TEAM_MEMBERS_FAILURE = "FETCH_TEAM_MEMBERS_FAILURE";

export const ADD_TEAM_MEMBER = "ADD_TEAM_MEMBER";
export const CHANGE_TEAM = "CHANGE_TEAM";

// roles
export const FETCH_ROLES_REQUEST = "FETCH_ROLES_REQUEST";
export const FETCH_ROLES_SUCCESS = "FETCH_ROLES_SUCCESS";
export const FETCH_ROLES_FAILURE = "FETCH_ROLES_FAILURE";
