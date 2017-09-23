import React from "react";
import { Button, Row, Col } from "react-bootstrap";
import FontAwesome from "react-fontawesome";

const TeamMember = ({ _id: id, name, teamLead, role }) => {
  let teamLeadText = teamLead ? <p>Team Lead</p> : "";

  return (
    <Button 
      bsStyle={teamLead ? "info" : "default"} 
      className="team-member">
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
    </Button>
  );
};

export default TeamMember;