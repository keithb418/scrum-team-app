import React, { Component } from "react";
import { Button, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import FontAwesome from "react-fontawesome";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { truncateString } from "../utils/stringHelpers";
import { handleDeleteTeam } from "../actions/teams";

export class TeamHeader extends Component {
  constructor () {
    super()
  }

  handleDelete = () => {
    this.props.deleteTeam(this.props.id);
  }

  render () {
    const { teamName, id, teamMembers } = this.props;
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
          onClick={this.handleDelete}>
          <FontAwesome name="trash" />
        </Button>
      </div>
    );
  }
};

const mapDispatchToProps = dispatch => ({
  deleteTeam: (id) => dispatch(handleDeleteTeam(id))
})

TeamHeader.propTypes = {
  teamName: PropTypes.string,
  id: PropTypes.string
};

export default connect(undefined, mapDispatchToProps)(TeamHeader);