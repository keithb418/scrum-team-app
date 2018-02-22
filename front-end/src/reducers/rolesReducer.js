import { FETCH_ROLES_SUCCESS } from "../actionTypes"
import defaultRoles from "./defaultRoles";

const roles = (state = defaultRoles.roles, action) => {
  switch (action.type) {
    case FETCH_ROLES_SUCCESS: {
      const { roles } = action.result;
      return roles;
    }

    default: {
      return state;
    }
  }
};

export default roles;