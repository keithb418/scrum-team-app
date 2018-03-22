import * as types from '../actionTypes'
import defaultRoles from "./defaultRoles";

const roles = (state = defaultRoles.roles, action) => {
  switch (action.type) {
    case types.FETCH_ROLES: 
    const { roles: { roles } } = action
      return roles;

    default: {
      return state;
    }
  }
};

export default roles;