import React from "react";
import { connect } from "react-redux";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

class MemberProfile extends React.Component {
  render () {
    const { member, team } = this.props;

    return (
      <div>
        <h2>Profile</h2>
        <ul>
          {Object.keys(member).map(key => {
            const info = member[key];
            if (key === "name" || key ==="email" || key === "role") {
              return <li key={key}>{key.toUpperCase()} : {info}</li>;
            } else if (key === "teamLead") {
              return <li key={key}>TEAM LEAD : { info ? "Yes" : "No" }</li>;
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
        <Link to="/">
          <Button>Back to Dashboard</Button>
        </Link>
      </div>
    );
  }
};

export default MemberProfile;