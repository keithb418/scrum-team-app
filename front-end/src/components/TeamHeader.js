import React from "react";
import { Button, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import FontAwesome from "react-fontawesome";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { truncateString } from "../util/stringHelpers";

let TeamHeader = ({ teamName, deleteTeam, id, teamMembers }) => {

  const isDisabled = teamMembers.length > 0;

  return (
    <div className="team-header panel-heading">
      <Link to={`team/${id}/member/add`}>
        <Button className="add-team-member-btn">
          <FontAwesome name="user-plus" />
        </Button>
      </Link>
        <h2 className="col-xs-10 panel-title">{truncateString(teamName, 16)}</h2>
      <Link to={`team/${id}/edit`}>
        <Button>
          <FontAwesome name="edit" />
        </Button>
      </Link>
      <Button
        disabled={isDisabled}
        onClick={() => deleteTeam(id)}>
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