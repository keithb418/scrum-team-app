import React from "react";
import TeamColumn from "./TeamColumn";
import AddTeamColumn from "./AddTeamColumn";

const TeamColumns = ({ teams }) => {
  let teamColumns = teams.map((team) => 
    <TeamColumn
      key={team._id}
      id={team._id} 
      teamName={team.name} 
      project={team.project}
      teamMembers={team.teamMembers} />
  );

  return (
    <div className="team-columns">
      {teamColumns}
      <AddTeamColumn />
    </div>
  );
};

export default TeamColumns;