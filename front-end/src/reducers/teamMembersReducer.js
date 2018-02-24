import {
  CREATE_TEAM_MEMBER_SUCCESS, FETCH_TEAM_MEMBERS_SUCCESS, DELETE_TEAM_MEMBER_SUCCESS,
  UPDATE_TEAM_MEMBER_SUCCESS, CHANGE_TEAM_SUCCESS
} from "../actionTypes";

const teamMembers = (state = [], action) => {
    switch (action.type) {
      case CREATE_TEAM_MEMBER_SUCCESS: {
        const { result } = action;

        return [
          ...state,
          result
        ];
      }

      case DELETE_TEAM_MEMBER_SUCCESS: {
        const { result } = action;

        return state.filter(teamMember => teamMember._id !== result.id );
      }

      case CHANGE_TEAM_SUCCESS: {
        let newState = [...state];
        let teamMember = newState.find((item) => {
          return item._id === action.result._id;
        });

        teamMember.team = action.result.team;

        return newState;
      }

      case FETCH_TEAM_MEMBERS_SUCCESS: {
        const { teamMembers } = action.result;
        return teamMembers;
      }

      case UPDATE_TEAM_MEMBER_SUCCESS: {
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