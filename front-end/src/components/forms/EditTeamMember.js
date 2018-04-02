import React, { Component } from "react";
import { connect } from "react-redux";
import TeamMemberForm from "./TeamMemberForm";
import { fetchProfileData } from '../../actions/shared';
import { hanldeUpdateTeamMember } from "../../actions/teamMembers";
import TeamMember from "../TeamMember";
import Loading from "../Loading";

class EditTeamMember extends Component {
  constructor (props) {
    super(props);
  }

  onSubmit = (teamMember) => {
    const _id = this.props.teamMember._id;
    this.props.editTeamMember({
      _id,
      ...teamMember
    });
    this.props.history.push('/');
  }
  
  render() {
    return this.props.isFetching ?
      <Loading /> :
      <TeamMemberForm
        title="Edit Team"
        teams={this.props.teams}
        roles={this.props.roles}
        teamMember={this.props.teamMember}
        onSubmit={this.onSubmit}
      />
  }
}

const mapStateToProps = ({ teamMembers: { teamMember }, teams: { teams }, roles, fetch: { isFetching } }) => ({
  teamMember,
  teams,
  roles,
  isFetching
})

const mapDispatchToProps = (dispatch) => ({
  fetchProfileData: (id) => dispatch(fetchProfileData(id)),
  editTeamMember: (teamMember) => dispatch(hanldeUpdateTeamMember(teamMember))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditTeamMember);