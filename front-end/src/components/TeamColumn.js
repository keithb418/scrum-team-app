import React from "react";
import { connect } from "react-redux";
import TeamMember from "./TeamMember";
import TeamHeader from "./TeamHeader";
import PropTypes from "prop-types";

let TeamColumn = ({ id = "", teamName = "" , project = "", teamMembers = [], dispatch, deleteTeam, deleteTeamMember, changeTeam }) => {

  teamMembers.sort((a, b) => {
    if (b.teamLead) {
      return 1;
    }

    if (a.teamLead) {
      return -1;
    }

    return 0;
  });

  const teamMemberComponents = teamMembers.map((teamMember) =>
    <TeamMember
      key={teamMember._id}
      id={teamMember._id}
      name={teamMember.name}
      teamLead={teamMember.teamLead}
      role={teamMember.role}
      deleteTeamMember={deleteTeamMember} />
  );

  let allowDrop = (e) => {
    e.preventDefault();
  };

  let drop = (e) => {
    e.preventDefault();
    const _id = e.dataTransfer.getData("tmId");
    const team = id;

    // let teamMember = teamMembers.find((teamMemberId) => {
    //   return teamMember._id === teamMemberId;
    // });

    changeTeam(_id, team);

    // dispatch({
    //   type: "CHANGE_TEAM",
    //   teamMemberId: e.dataTransfer.getData("tmId"),
    //   team: id
    // });
  };

  return (
    <div className="panel panel-default team-column" onDragOver={allowDrop} onDrop={drop}>
      <TeamHeader
        deleteTeam={deleteTeam}
        id={id}
        teamName={teamName}
        project={project} />
      <div className="panel-body team-body" onDrop={drop} onDragOver={allowDrop} >
        {teamMemberComponents}
      </div>
    </div>
  );
};

TeamColumn = connect()(TeamColumn);

TeamColumn.propTypes = {
  dispatch: PropTypes.func,
  id: PropTypes.string,
  teamMembers: PropTypes.array,
  teamName: PropTypes.string,
};

export default TeamColumn;