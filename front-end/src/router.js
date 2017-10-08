import React from "react";
import TeamColumnsContainer from "../containers/TeamColumnsContainer";
import AddTeamMember from "./forms/AddTeamMember";

const Router = ({ route }) => {
  switch (route) {
  	case "":
			return (
				<TeamColumnsContainer />
				<AddTeamMember />
			);
  	case "add-team-member":
			return (
				<AddTeamMember />
			);
  	case "add-team":
			return (
				// TO DO: create AddTeam component
			);
	}

	if (route.indexOf("edit-team-member-") > -1) {
		return (
			// TO DO: create edit team member component
		);
	}

	else if (route.indexOf("edit-team-") > -1) {
		return (
			// TO DO: create edit team component
		);
	}

	else {
		return (
			// TO DO: create 404 page component
		);
	}
	
};

export default Router;