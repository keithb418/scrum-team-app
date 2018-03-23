import React, { Component } from "react";
import { connect } from "react-redux";
import { changeTeam } from "../actions/teamMembers"
import TeamMember from "./TeamMember";
import TeamHeader from "./TeamHeader";
import PropTypes from "prop-types";

class TeamColumn extends Component {
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
    this.props.dispatch(changeTeam(_id, team));
  };

  render() {
    const { id, teamName, teamMembers, project } = this.props;
    return (
      <div className="panel panel-default team-column" onDragOver={this.allowDrop} onDrop={this.drop}>
        <TeamHeader
          teamMembers={teamMembers}
          id={id}
          teamName={teamName}
          project={project} />
        <div className="panel-body team-body" onDrop={this.drop} onDragOver={this.allowDrop} >
          { teamMembers.map(teamMember =>
            <TeamMember
              key={teamMember._id}
              id={teamMember._id}
              name={teamMember.name}
              teamLead={teamMember.teamLead}
              role={teamMember.role}
            />
          )}
        </div>
      </div>
    );
  }  
}

TeamColumn.defaultProps = {
  id: "",
  teamName: "",
  project: "",
  teamMembers: []
}

TeamColumn.propTypes = {
  dispatch: PropTypes.func,
  id: PropTypes.string,
  teamMembers: PropTypes.array,
  teamName: PropTypes.string,
};

export default connect()(TeamColumn);