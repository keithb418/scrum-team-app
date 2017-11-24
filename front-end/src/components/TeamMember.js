import React from "react";
import { Button, Row, Col } from "react-bootstrap";
import FontAwesome from "react-fontawesome";
import PropTypes from "prop-types";
import { deleteTeamMember } from "../actions/index";

const TeamMember = ({ id, name, teamLead, role, deleteTeamMember }) => {
  let teamLeadText = teamLead ? <p>Team Lead</p> : "";
  let dragStart = (e) => {
    e.dataTransfer.setData("tmId", id);
  };

  let className = `team-member btn ${teamLead ? "btn-info" : "btn-default" }`;

  return (
    <button
      className={className}
      draggable="true"
      onDragStart={(e) => {
        e.dataTransfer.setData("tmId", id);
      }}>
      <Row>
        <Col
          xs={4}
          className="user-img">
          <FontAwesome name="user-circle" />
        </Col>
        <Col
          xs={8}
          className="details">
          <p>{name}</p>
          {teamLeadText}
          <p>{role}</p>
          <FontAwesome name="edit" />
          <FontAwesome name="times-circle" onClick={() => deleteTeamMember(id)} />
        </Col>
      </Row>
    </button>
  );
};

TeamMember.propTypes = {
  role: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  teamLead: PropTypes.bool
};

export default TeamMember;