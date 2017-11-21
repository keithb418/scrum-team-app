import { ADD_TEAM_MEMBER, CHANGE_TEAM } from "../actionTypes"

const teamMembers = (state = [], action) => {
    switch (action.type) {
      case ADD_TEAM_MEMBER:
        return [
          ...state,
          action.teamMember
        ];
      case CHANGE_TEAM:
        let newState = [...state];
        let teamMember = newState.find((item) => {
          return item._id === action.teamMemberId;
        });

        teamMember.team = action.team;

        return newState;
      default:
        return state;
    }
  };
  
  export default teamMembers;