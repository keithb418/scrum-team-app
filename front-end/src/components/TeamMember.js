import React from "react";
import { Button, Row, Col } from "react-bootstrap";
import FontAwesome from "react-fontawesome";
import PropTypes from "prop-types";
import { deleteTeamMember } from "../actions/index";

const TeamMember = ({ id, name, teamLead, role, deleteTeamMember, navigate }) => {
  let teamLeadText = teamLead ? <p>Team Lead</p> : "";
  let dragStart = (e) => {
    e.dataTransfer.setData("tmId", id);
  };

  let className = `team-member btn btn-default ${teamLead ? "team-lead" : "" }`;

  return (
    <button
      className={className}
      draggable="true"
      onDragStart={(e) => {
        e.dataTransfer.setData("tmId", id);
      }}
      onClick={() => {
        navigate(`edit-team-member-${id}`);
      }}>
      <div className="team-member-header">
        <p>{name}</p>
        <FontAwesome name="times" className="delete-team-member-btn" tabIndex="1" onClick={() => deleteTeamMember(id)} />
      </div>
      <Row>
        <Col
          xs={4}
          className="user-img">
          <FontAwesome name="user-circle" />
        </Col>
        <Col
          xs={8}
          className="details">
          {teamLeadText}
          <p>{role}</p>
          <p>(select to edit)</p>
        </Col>
      </Row>
    </button>
  );
};

TeamMember.propTypes = {
  role: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  teamLead: PropTypes.bool,
  deleteTeamMember: PropTypes.func
};

export default TeamMember;