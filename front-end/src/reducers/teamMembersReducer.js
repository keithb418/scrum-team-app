import * as types from '../actionTypes';

const teamMembers = (state = [], action) => {
    switch (action.type) {
      case types.CREATE_TEAM_MEMBERS: {
        const { result } = action;
        return [
          ...state,
          result
        ];
      }

      case types.DELETE_TEAM_MEMBERS: {
        const { result } = action;

        return state.filter(teamMember => teamMember._id !== result.id );
      }

      case types.CHANGE_TEAM: {
        let newState = [...state];
        let teamMember = newState.find((item) => {
          return item._id === action.result._id;
        });

        teamMember.team = action.result.team;
      }

      case types.FETCH_TEAM_MEMBERS: 
          const { teamMembers: { teamMembers } } = action;
          return teamMembers;
      

      case types.UPDATE_TEAM_MEMBER: {
        const { result } = action;

        let newState = state.filter((item) => {
          return item._id !== result._id;
        });

        newState.push(result);

        return newState;
      }

      default: {
        return state;
      }
    }
  };

  export default teamMembers;