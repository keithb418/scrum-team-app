import React from "react";
import { Button, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import FontAwesome from "react-fontawesome";

let teamMemberId = 100;

let TeamHeader = ({ id, teamName, projectName, dispatch }) => {
  return (
    <div className="team-header panel-heading">
        <Button className="col-xs-2" onClick={() => dispatch({
            type: "ADD_TEAM_MEMBER",
            teamMember: {
              "_id": `${teamMemberId++}tm`,
              "name": "Added Team Member",
              "email": "added@mail.com",
              "team": id,
              "teamHistory": ["ReactDojo", "AngularDojo"],
              "role": "Front-End Developer",
              "skills": ["React", "Redux", "Angular"]
            }
          })}>
          <FontAwesome name="user-plus" />
        </Button>
        <h2 className="col-xs-10 panel-title">{teamName} { projectName ? `/ ${projectName}`: "" }</h2>
    </div>
  );
};

TeamHeader = connect()(TeamHeader);

export default TeamHeader;