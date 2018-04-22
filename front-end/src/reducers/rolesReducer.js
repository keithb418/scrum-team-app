import * as types from "../actionTypes";
import defaultRoles from "./defaultRoles";

export default (state = defaultRoles.roles, action) => {
  switch (action.type) {
    case types.FETCH_ROLES: 
    const { roles: { roles } } = action;
      return defaultRoles.roles;

    default: {
      return state;
    }
  }
};

 