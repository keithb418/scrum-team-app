import {
  CREATE_TEAM_SUCCESS, UPDATE_TEAM_SUCCESS, FETCH_TEAMS_SUCCESS,
  DELETE_TEAM_SUCCESS
} from "../actionTypes";

const teams = (state = [], action) => {
  switch (action.type) {
    case FETCH_TEAMS_SUCCESS: {
      const { teams } = action.result;
      return teams;
    }

    case CREATE_TEAM_SUCCESS: {
      const { result } = action;

      return [
        ...state,
        result
      ];
    }

    case DELETE_TEAM_SUCCESS: {
      const { result } = action;

      return state.filter(team => team._id !== result.id );
    }

    case UPDATE_TEAM_SUCCESS: {
      return state.map(team => {
        if (team._id === action.result._id) {
            return action.result;
        }

        return team;
      });
    }

    default: {
      return state;
    }
  }
};

export default teams;