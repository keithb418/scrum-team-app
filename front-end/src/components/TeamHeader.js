import React from "react";
import { Button, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import FontAwesome from "react-fontawesome";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

let TeamHeader = ({ teamName, projectName, deleteTeam, id }) => {
  return (
    <div className="team-header panel-heading">
      <Link to={`team/${id}/member/add`}>
        <Button className="add-team-member-btn">
          <FontAwesome name="user-plus" />
        </Button>
      </Link>
        <h2 className="col-xs-10 panel-title">{teamName} { projectName ? `/ ${projectName}`: "" }</h2>
      <Link to={`team/${id}/edit`}>
        <Button>
          <FontAwesome name="edit" />
        </Button>
      </Link>
      <Button onClick={() => deleteTeam(id)}>
        <FontAwesome name="trash" />
      </Button>
    </div>
  );
};

TeamHeader = connect()(TeamHeader);

TeamHeader.propTypes = {
  teamName: PropTypes.string,
  projectName: PropTypes.string,
  dispatch: PropTypes.func,
  id: PropTypes.string
};

export default TeamHeader;