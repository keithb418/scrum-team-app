import React from "react";
import TeamColumnsContainer from "./containers/TeamColumnsContainer";
import AddTeamMember from "./components/forms/AddTeamMember";

class Router extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		window.onpopstate = () => {
			this.props.dispatch({
	            type: "CHANGE_ROUTE",
	            route: window.location.pathname.replace(/\//g, "")
	        });
		};
	}

	render() {
		let currentPath = window.location.pathname.replace(/\//g, "");

		if (currentPath != this.props.route) {
			history.pushState(null, "", this.props.route);
		}
	  	
	  	switch (this.props.route) {
		  	case "":
				return (
					<TeamColumnsContainer />
				);
		  	case "add-team-member":
				return (
					<AddTeamMember />
				);
		  	case "add-team":
				return;
					// TO DO: create AddTeam component
				
		}
		// TO DO: fix error: this.props.route is null
		if (this.props.route.indexOf("edit-team-member-") > -1) {
			return;
				// TO DO: create edit team member component
			
		}

		else if (this.props.route.indexOf("edit-team-") > -1) {
			return;
				// TO DO: create edit team component
			
		}

		else {
			return;
				// TO DO: create 404 page component
			
		}
	}

};

export default Router;