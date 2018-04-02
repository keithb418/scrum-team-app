import React, { Component } from "react";
import { connect } from "react-redux";
import TeamForm from "./TeamForm";
import Loading from "../Loading";
import { updateTeam, handleFetchTeam } from "../../actions/teams";
import { handleFetchTeamMember } from "../../actions/teamMembers";

class EditTeam extends Component {
  componentDidMount() {
    this.props.fetchTeam(this.props.match.params.id)
  }

  onSubmit = (team) => {
    const _id = this.props.team._id;
    this.props.editTeam({
      _id,
      ...team
    });
    this.props.history.push('/');
  }

  render() {
    return this.props.isFetching ?
      <Loading /> :
      <TeamForm
        title="Edit Team"
        team={this.props.team}
        onSubmit={this.onSubmit}
      />
  }
}

const mapStateToProps = ({ teams: { team }, fetch: { isFetching } }) => ({
    team,
    isFetching
});

const mapDispatchToProps = (dispatch) => ({
  fetchTeam: (id) => dispatch(handleFetchTeam(id)),
  editTeam: (team) => dispatch(updateTeam(team))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditTeam);