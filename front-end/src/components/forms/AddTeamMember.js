import React, { Component } from "react";
import { connect } from "react-redux";
import TeamMemberForm from "./TeamMemberForm";
import { handleCreateTeamMember } from "../../actions/teamMembers";
import TeamMember from "../TeamMember";

export class AddTeamMember extends Component {
  constructor (props) {
    super(props);
  }

  onSubmit = (teamMember) => {
    this.props.onSubmit(teamMember);
    this.props.history.push('/');
  }

  render() {
    return (
      <TeamMemberForm
        title="Add Team Member"
        teams={this.props.teams}
        roles={this.props.roles}
        onSubmit={this.onSubmit}
      />
    )
  }
}

const mapStateToProps = ({ teams: { teams }, roles } ) => ({
    teams,
    roles
})

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (teamMember) => dispatch(handleCreateTeamMember(teamMember))
})

export default connect(mapStateToProps, mapDispatchToProps)(AddTeamMember);