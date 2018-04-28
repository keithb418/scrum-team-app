import React, { Component } from "react";
import { connect } from "react-redux";
import { handleChangeTeam } from "../actions/teamMembers";
import { handleDeleteTeam } from "../actions/teams";
import TeamMember from "./TeamMember";
import TeamHeader from "./TeamHeader";
import PropTypes from "prop-types";

export class TeamColumn extends Component {
  constructor(props) {
    super(props)
  }

  allowDrop = (e) => {
    e.preventDefault();
  };

  drop = (e) => {
    e.preventDefault();
    const _id = e.dataTransfer.getData("tmId");
    const team = this.props.id;
    this.props.changeTeam(_id, team);
  };

  handleDelete = () => {
    this.props.deleteTeam(this.props.id)
  }

  render() {
    const { id, teamName, teamMembers, project } = this.props;
    return (
      <div className="panel panel-default team-column" onDragOver={this.allowDrop} onDrop={this.drop}>
        <TeamHeader
          teamMembers={teamMembers}
          id={id}
          teamName={teamName} />
        <div className="panel-body team-body" onDrop={this.drop} onDragOver={this.allowDrop} >
          { teamMembers.map(teamMember =>
            <TeamMember
              key={teamMember._id}
              id={teamMember._id}
              name={teamMember.name}
              teamLead={teamMember.teamLead}
              role={teamMember.role} />
          )}
        </div>
      </div>
    );
  }  
}

TeamColumn.defaultProps = {
  id: "",
  teamName: "",
  teamMembers: []
}

TeamColumn.propTypes = {
  id: PropTypes.string,
  teamMembers: PropTypes.array,
  teamName: PropTypes.string,
};

const mapDispatchToProps = dispatch => ({
  changeTeam: (_id, team) => dispatch(handleChangeTeam(_id, team)),
})

export default connect(undefined, mapDispatchToProps)(TeamColumn);