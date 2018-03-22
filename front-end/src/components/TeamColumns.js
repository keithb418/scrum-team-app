
import React, { Component } from 'react'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchInitialData } from '../actions/shared'
import TeamColumn from "./TeamColumn";
import AddTeamColumn from "./AddTeamColumn";

class TeamColumns extends Component { 
  componentDidMount() {
    this.props.dispatch(fetchInitialData())
  }
  
  render() {
    return (
      <div className="team-columns">
      
        {this.props.teams.map(team =>
          <TeamColumn
            key={team._id}
            id={team._id}
            teamName={team.name}
            project={team.project}
            teamMembers={team.teamMembers}
          />
        )}
        <AddTeamColumn />
      </div>
    )
  }
}

TeamColumns.propTypes = {
  teams: PropTypes.array
};

const mapStateToProps = ({teams, teamMembers}) => {
  let teamsList = teams.map(item => ({ ...item }))
  let teamMembersList = teamMembers.map(item => ({ ...item }))

  teamMembersList.map((teamMember) => {
    let team = teamsList.find((team) => team._id === teamMember.team);

    if (team) {
      team.teamMembers = team.teamMembers || [];
      team.teamMembers.push(teamMember);
    }
  });

  return {
    teams: teamsList,
    teamMembers: teamMembersList
  };
}

export default connect(mapStateToProps)(TeamColumns);