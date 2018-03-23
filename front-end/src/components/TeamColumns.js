
import React, { Component } from 'react'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import TeamColumn from "./TeamColumn";
import AddTeamColumn from "./AddTeamColumn";

const TeamColumns = ({ teams }) => { 
  return (
    <div className="team-columns">
      {teams.map(team =>
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


TeamColumns.propTypes = {
  teams: PropTypes.array
};

const mapStateToProps = ({teams, teamMembers}) => {
  let teamsList = teams.map(item => ({ ...item }))
  let teamMembersList = teamMembers.map(item => ({ ...item }))

  teamMembersList
  .map((teamMember) => {
    let team = teamsList.find((team) => team._id === teamMember.team);

    if (team) {
      team.teamMembers = team.teamMembers || [];
      team.teamMembers.push(teamMember);
    }
  })
  .sort((a, b) => {
    if (b.teamLead) {
      return 1;
    }

    if (a.teamLead) {
      return -1;
    }
    return 0;
  });

  return {
    teams: teamsList,
  };
}

export default connect(mapStateToProps)(TeamColumns);