import React from "react";

import TeamColumnsContainer from "../containers/TeamColumnsContainer";
import AddTeam from "./forms/AddTeam";
import AddTeamMember from "./forms/AddTeamMember";

const Router = ({ route, navigate }) => {
  switch (route) {
    case "":
      return <TeamColumnsContainer navigate={navigate} />;

     case "add-team":
       return <AddTeam navigate={navigate}/>;

     case "add-team-member":
       return <AddTeamMember navigate={navigate} />;

    default:
      return <TeamColumnsContainer navigate={navigate} />;
  }
};

export default Router;