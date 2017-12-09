import React from "react";

import TeamColumnsContainer from "../containers/TeamColumnsContainer";
import AddTeam from "./forms/AddTeam";
import AddTeamMember from "./forms/AddTeamMember";
import EditTeamMember from "./forms/EditTeamMember";

const Router = ({ route, navigate }) => {
  let id = "";

  if (route.indexOf("edit-team-member-") > -1) {
    id = route.replace("edit-team-member-", "");
    route = "edit-team-member";
  } else if (route.indexOf("edit-team-") > -1) {
    id = route.replace("edit-team-", "");
    route = "edit-team";
  }

  switch (route) {
    case "":
      return <TeamColumnsContainer navigate={navigate} />;

    case "add-team":
      return <AddTeam navigate={navigate}/>;

    case "add-team-member":
      return <AddTeamMember navigate={navigate} />;

    case "edit-team-member":
      return <EditTeamMember navigate={navigate} teamMemberId={id} />;

    default:
      return <TeamColumnsContainer navigate={navigate} />;
  }
};

export default Router;