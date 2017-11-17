import { ADD_TEAM, UPDATE_TEAMS } from "../actionTypes"

const teams = (state = [], action) => {
    switch (action.type) {
      case ADD_TEAM:
        return [
          ...state,
          action.team
        ];
      case UPDATE_TEAMS:
        return action.teams;
      default:
        return state;
    }
  };
  
  export default teams;