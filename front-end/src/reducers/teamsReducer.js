import * as types from '../actionTypes';

const initialState = {
  team: {
    name: ''
  },
  teams: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_TEAMS: 
      const { teams: { teams } } = action;
      return {
        ...state,
        teams
      }
      
    case types.FETCH_TEAM:   
      const { team } = action;
        return {
          ...state,
          team
        }

    case types.CREATE_TEAM: 
      return {
        ...state,
        teams: [
          ...state,
          action.team
        ]
      } 
    
    case types.DELETE_TEAM: 
      return {
        ...state,
        teams: state.teams.filter(team => team._id !== action.id )
      } 
    
    case types.UPDATE_TEAM: 
        return {
          ...state,
          teams: state.teams.map(team => {      
            if (team._id === action.team._id) {
                return action.team
            } else {
              return team
            }
        })
      }
    
    default: {
      return state;
    }
  }
};

