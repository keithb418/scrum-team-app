import React from "react";
import { Button, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import FontAwesome from "react-fontawesome";

let TeamHeader = ({ teamName, projectName, dispatch }) => {
  return (
    <div className="team-header panel-heading">
        <Button className="col-xs-2" onClick={() => 
          dispatch({
            type: "CHANGE_ROUTE",
            route: "add-team-member"
          })
      }>
          <FontAwesome name="user-plus" />
        </Button>
        <h2 className="col-xs-10 panel-title">{teamName} { projectName ? `/ ${projectName}`: "" }</h2>
    </div>
  );
};

TeamHeader = connect()(TeamHeader);

export default TeamHeader;