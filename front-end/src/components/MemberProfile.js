import React from "react";
import { connect } from "react-redux";
import { Button } from "react-bootstrap";
import FontAwesome from "react-fontawesome";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { capitalizeFirstLetter } from "../util/stringHelpers";

class MemberProfile extends React.Component {
  render () {
    const { member, team } = this.props;
    const id = this.props.member._id;

    return (
      <div>
        <h2>Profile</h2>
        <h3>Team {team.name}</h3>
        <FontAwesome name="user-circle"/>
        <ul>
          {Object.keys(member).map(key => {
            const info = member[key];
            if (key === "name" || key ==="email" || key === "role") {
              return <li key={key}>{capitalizeFirstLetter(key)}: {info}</li>;
            } else if (key === "teamLead") {
              return <li key={key}>Team Lead: { info ? "Yes" : "No" }</li>;
            } else {
              return null;
            }
          })}
        </ul>

        <h3>Skills</h3>
        <ul>
          { member.skills.map(function (skill, index) {
            return <li key={index}>{skill}</li>;
          })}
        </ul>
        <Link to={`/member/${id}/edit`}>
          <Button>Edit</Button>
        </Link>
        <Link to="/">
          <Button>Back to Dashboard</Button>
        </Link>
      </div>
    );
  }
};

MemberProfile.propTypes = {
  member: PropTypes.object,
  team: PropTypes.object
};

export default MemberProfile;