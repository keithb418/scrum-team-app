import React from "react";

import TeamColumnsContainer from "../containers/TeamColumnsContainer";
import AddTeam from "./forms/AddTeam";

const Router = ({ route }) => {
  switch (route) {
    case "":
     return <TeamColumnsContainer />;

     case "add-team":
       return <AddTeam />;

    default:
    case "":
      return <TeamColumnsContainer />;
  }
}

export default Router;