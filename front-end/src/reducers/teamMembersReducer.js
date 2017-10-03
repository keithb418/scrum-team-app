const teamMembers = (state = [], action) => {
    switch (action.type) {
      case "ADD_TEAM_MEMBER":
        return [
          ...state,
          action.teamMember
        ];
      default:
        return state;
    }
  };
  
  export default teamMembers;