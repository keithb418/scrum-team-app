import * as types from '../actionTypes';

const initialState = {
  teamMembers: [],
  teamMember: null
}

export default (state = initialState, action) => {
    switch (action.type) {
      case types.CREATE_TEAM_MEMBERS: 
        return {
          ...state,
          teamMembers: [
            ...state.teamMembers,
            action.teamMember
          ]       
        }
      
      case types.DELETE_TEAM_MEMBER: 
        return {
          ...state,
          teamMembers: state.teamMembers.filter(({ _id }) => _id !== action.id )
        }
      
      case types.CHANGE_TEAM: 
        return {
          ...state,
          teamMembers: state.teamMembers.map(teamMember => {
            if(teamMember._id === action.result._id) {
              teamMember.team = action.result.team;
              return teamMember
            } else {
              return teamMember
            }
          })
        }
        
      case types.FETCH_TEAM_MEMBERS: 
        const { teamMembers: { teamMembers } } = action;
        return {
          ...state, 
          teamMembers 
        };
      
      case types.FETCH_TEAM_MEMBER:   
        const { teamMember } = action;
        return {
          ...state,
          teamMember
        }

      case types.UPDATE_TEAM_MEMBER: 
        return {
          ...state,
          teamMembers: state.teamMembers.map(teamMember => {
            if(teamMember._id === action.teamMember._id) {
              return action.teamMember            
            } else {
              return teamMember
            }
          })
        }
      default: {
        return state;
      }
    }
};

  