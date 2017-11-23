import React from "react";
import PropTypes from "prop-types";

import TeamColumn from "./TeamColumn";
import AddTeamColumn from "./AddTeamColumn";

const TeamColumns = ({ teams, navigate }) => {

  const teamColumns = teams.map((team) =>
    <TeamColumn
      key={team._id}
      id={team._id}
      teamName={team.name}
      project={team.project}
      teamMembers={team.teamMembers}
      navigate={navigate} />
  );

  return (
    <div className="team-columns">
      {teamColumns}
      <AddTeamColumn />
    </div>
  );
};

TeamColumns.propTypes = {
  teams: PropTypes.array
};

export default TeamColumns;

