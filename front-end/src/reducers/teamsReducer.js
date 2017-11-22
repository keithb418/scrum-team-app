import { ADD_TEAM, UPDATE_TEAMS, FETCH_TEAMS_SUCCESS } from "../actionTypes"

const teams = (state = [], action) => {
  switch (action.type) {
    case FETCH_TEAMS_SUCCESS: {
      const { teams } = action.result;
      return teams;
    }

    case ADD_TEAM: {
      return [
        ...state,
        action.team
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

