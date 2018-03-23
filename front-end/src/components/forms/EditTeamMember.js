import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import TeamMemberForm from "./TeamMemberForm";

import { updateTeamMember } from "../../actions/teamMembers";

class EditTeamMember extends TeamMemberForm {
  constructor (props) {
    super(props, "Edit Team Member", props.updateTeamMember);
  }
}

const mapStateToProps = (state, props) => {
  let teamMember = state.teamMembers.find((item) => {
    return item._id === props.match.params.id;
  });

  return {
    id: teamMember._id,
    name: teamMember.name,
    email: teamMember.email,
    team: teamMember.team,
    teamLead: teamMember.teamLead,
    experience: teamMember.experience,
    role: teamMember.role,
    skills: teamMember.skills,
    teams: state.teams,
    roles: state.roles,
    error: state.error && state.error.message
  };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ updateTeamMember }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(EditTeamMember);