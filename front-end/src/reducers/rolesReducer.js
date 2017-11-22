import { FETCH_ROLES_SUCCESS } from "../actionTypes"

const roles = (state = [], action) => {
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