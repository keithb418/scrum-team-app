import React from "react";
import TeamMember from "./TeamMember";
import TeamHeader from "./TeamHeader";

const TeamColumn = ({ teamName = "" , project = "", teamMembers = [] }) => {

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

  return (
    <div className="panel panel-default team-column">
      <TeamHeader 
        teamName={teamName} 
        project={project} />
      <div className="panel-body team-body">
        {teamMemberComponents}
      </div>
    </div>
  );
};


export default TeamColumn;