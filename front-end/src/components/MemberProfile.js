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
      <div className="row">
        <div className="profile-section col-md-6 offset-md-3 col-xs-12">
          <div className="panel-heading">
            <h3 className="panel-title">{team.name}</h3>
          </div>
          <hr />
          <div className="member-profile-subheading">
            <FontAwesome name="user-circle" className="member-img" />
            <p>{member.name}</p>
          </div>
          <hr />
          <div className="row">
            <div className="col-md-6">
            <h3>Profile</h3>
              <ul className="member-info">
                {Object.keys(member).map(key => {
                  const info = member[key];
                  if (key === "name" || key ==="email" || key === "role") {
                    return <li key={key}>{info}</li>;
                  } else if (key === "teamLead") {
                    return <li key={key}>Team Lead: { info ? "Yes" : "No" }</li>;
                  } else {
                    return null;
                  }
                })}
              </ul>
            </div>
            <div className="col-md-6">
            <h3>Skills</h3>
              <ul className="member-info inline">
                { member.skills.map(function (skill, index) {
                  return <li key={index}>{skill}</li>;
                })}
              </ul>
            </div>
          </div>
          <hr />
          <Link to={`/member/${id}/edit`}>
            <Button bsStyle="primary">Edit</Button>
          </Link>
          <Link to="/">
            <Button>Back to Dashboard</Button>
          </Link>
        </div>
      </div>
    );
  }
};

MemberProfile.propTypes = {
  member: PropTypes.object,
  team: PropTypes.object
};

export default MemberProfile;