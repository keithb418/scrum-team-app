import React from "react";
import { Col } from "react-bootstrap";

const Profile = ({ member }) => {
    return (
      <Col md={6}>
        <h3>Profile</h3>
        <ul className="member-info">
          {Object.keys(member).map(key => {
            const info = member[key];
            if (key === "name" || key ==="email" || key === "role" || key === "experience") {
              return <li key={key}>{info}</li>;
            } else if (key === "teamLead") {
              return <li key={key}>Team Lead: { info ? "Yes" : "No" }</li>;
            } else {
              return null;
            }
          })}
        </ul>
      </Col>
    );
};

export default Profile;