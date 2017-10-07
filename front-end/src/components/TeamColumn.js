import React from "react";
import { connect } from "react-redux";
import TeamMember from "./TeamMember";
import TeamHeader from "./TeamHeader";

let TeamColumn = ({ id = "", teamName = "" , project = "", teamMembers = [], dispatch }) => {

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
      role={teamMember.role} />
  );

  let allowDrop = (e) => {
    e.preventDefault();
  };

  let drop = (e) => {
    e.preventDefault();

    dispatch({
      type: "CHANGE_TEAM",
      teamMemberId: e.dataTransfer.getData("tmId"),
      team: id
    });
  };

  return (
    <div className="panel panel-default team-column" onDragOver={allowDrop} onDrop={drop}>
      <TeamHeader 
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

export default TeamColumn;