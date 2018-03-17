import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import TeamMemberForm from "./TeamMemberForm";

import { createTeamMember } from "../../actions/teamMembers";

class AddTeamMember extends TeamMemberForm {
  constructor (props) {
    super(props, "Add Team Member", props.createTeamMember);
  }
}

const mapStateToProps = (state, props) => {
  let team = state.teams.find((item) => {
    return item._id === props.match.params.id;
  });

  return {
    team: team._id,
    teams: state.teams,
    roles: state.roles,
    error: state.error && state.error.message
  };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ createTeamMember }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AddTeamMember);