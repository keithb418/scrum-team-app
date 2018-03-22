import * as types from '../actionTypes';

const teams = (state = [], action) => {
  switch (action.type) {
    case types.FETCH_TEAMS: 
      const { teams: { teams } } = action;
      return teams;
    

    case types.CREATE_TEAM: {
      const { result } = action;

      return [
        ...state,
        result
      ];
    }

    case types.DELETE_TEAM: {
      const { result } = action;

      return state.filter(team => team._id !== result.id );
    }

    case types.UPDATE_TEAM: {
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