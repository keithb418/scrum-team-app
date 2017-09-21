import React from 'react';
import TeamMember from './TeamMember';
import TeamHeader from './TeamHeader';

const TeamColumn = ({teamName, project, teamMembers}) => {

	teamMembers.sort((a, b) => {
		if (a.teamLead)
			return 1;
		if (b.teamLead)
			return -1;

		return 0;
	});

	const teamMemberComponents = teamMembers.map((teamMember) =>
	  <TeamMember id={teamMember._id} name={teamMember.name} teamLead={teamMember.teamLead} role={teamLead.role} />
	);

	return  (
		<TeamHeader teamName={teamName} project={project} />
		<hr />
		{teamMemberComponents}
	);
};


export default TeamColumn;