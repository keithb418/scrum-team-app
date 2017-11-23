import { CREATE_TEAM_SUCCESS, UPDATE_TEAMS, FETCH_TEAMS_SUCCESS } from "../actionTypes";

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

    case UPDATE_TEAMS: {
      return action.teams;
    }

    default: {
      return state;
    }
  }
};

export default teams;