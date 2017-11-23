import React from "react";
import TeamColumnsContainer from "./containers/TeamColumnsContainer";
import AddTeamMember from "./components/forms/AddTeamMember";
import {xhr} from "./xhr";
import {CHANGE_ROUTE, UPDATE_TEAMS} from "./actionTypes";
import AddTeam from "./components/forms/AddTeam";

class Router extends React.Component {
	constructor (props) {
		super(props);
		this.fetchTeams = this.fetchTeams.bind(this);
	}

	componentDidMount () {
		window.onpopstate = () => {
			this.props.dispatch({
	      type: CHANGE_ROUTE,
	      route: window.location.pathname.replace(/\//g, "")
	    });
		};

		// fetch teams
		this.fetchTeams();
	}

	fetchTeams() {
		xhr("/api/teams", "GET")
		.then(response => {
			this.props.dispatch({
				type: UPDATE_TEAMS,
				teams: response.teams
			});
		})
		.catch(err => {

		});
	}

	render () {
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
			  	return (
            <AddTeam />
          );

		}

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