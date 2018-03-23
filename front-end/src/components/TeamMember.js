import React, { Component } from "react";
import { Button, Row, Col } from "react-bootstrap";
import FontAwesome from "react-fontawesome";
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import { deleteTeamMember } from "../actions/teamMembers";
import { Link } from "react-router-dom";
import { truncateString } from "../utils/stringHelpers";

class TeamMember extends Component {
  constructor(props) {
    super(props)
  }
  
  dragStart = (e) => {
    e.dataTransfer.setData("tmId", this.props.id);
  };

  removeTeamMember = () => {
    this.props.dispatch(deleteTeamMember(this.props.id));
  }
  
  render() {
    const teamLeadText = teamLead ? <p>Team Lead</p> : "";
    const className = `team-member btn btn-default ${teamLead ? "team-lead" : "" }`;
    const { id, name, teamLead, role, deleteTeamMember } = this.props;
    return (
      <button
        className={className}
        draggable="true"
        onDragStart={this.dragStart}>
        <div className="team-member-header">
          <p>{truncateString(name, 23)}</p>
          <FontAwesome name="trash" className="delete-team-member-btn" tabIndex="1" onClick={this.removeTeamMember} />
        </div>
        <Link to={`/member/${id}`}>
          <Row>
            <Col
              xs={4}
              className="user-img">
                <FontAwesome name="user-circle" />
            </Col>
            <Col
              xs={8}
              className="details">
              {teamLead ? <p>Team Lead</p> : ""}
              <p>{role}</p>
            </Col>
          </Row>
        </Link>
      </button>
    )
  }
}

TeamMember.propTypes = {
  role: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  teamLead: PropTypes.bool,
  deleteTeamMember: PropTypes.func
};

export default connect()(TeamMember);