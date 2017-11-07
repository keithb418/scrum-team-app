import React from "react";
import { Button, Row, Col } from "react-bootstrap";
import FontAwesome from "react-fontawesome";

const TeamMember = ({ id, name, teamLead, role }) => {
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
        </Col>
      </Row>
    </button>
  );
};

export default TeamMember;