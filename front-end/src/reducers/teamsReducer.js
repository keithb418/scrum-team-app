const teams = (state = [], action) => {
    switch (action.type) {
      case "ADD_TEAM":
        return [
          ...state,
          action.team
        ];
      default:
        return state;
    }
  };
  
  export default teams;