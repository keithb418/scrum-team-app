import React from "react";
import { Button, Row, Col } from "react-bootstrap";
import FontAwesome from "react-fontawesome";

const TeamHeader = ({ _id: id, teamName, projectName }) => {
  return (
    <div className="team-header panel-heading">
        <Button className="col-xs-2">
          <FontAwesome name="user-plus" />
        </Button>
        <h2 className="col-xs-10 panel-title">{teamName} { projectName ? `/ ${projectName}`: "" }</h2>
    </div>
  );
};

export default TeamHeader;