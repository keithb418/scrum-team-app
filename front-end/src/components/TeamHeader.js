import React from "react";
import { Button, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import FontAwesome from "react-fontawesome";
import PropTypes from "prop-types";

let TeamHeader = ({ teamName, projectName, navigate, deleteTeam, id }) => {
  return (
    <div className="team-header panel-heading">
        <Button className="add-team-member-btn" onClick={() => navigate("add-team-member")}>
          <FontAwesome name="user-plus" />
        </Button>
        <h2 className="panel-title">{teamName} { projectName ? `/ ${projectName}`: "" }</h2>
        <Button onClick={() => deleteTeam(id)}>
          <FontAwesome name="times" />
        </Button>
    </div>
  );
};

TeamHeader = connect()(TeamHeader);

TeamHeader.propTypes = {
  teamName: PropTypes.string,
  navigate: PropTypes.func,
  projectName: PropTypes.string,
  dispatch: PropTypes.func,
  id: PropTypes.string
};

export default TeamHeader;