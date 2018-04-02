import React from "react";
import { Col } from "react-bootstrap";

const Skills = ({ member }) => {
    return (
      <Col md={6}>
        <h3>Skills</h3>
        <ul className="member-info inline">
          { member.skills.map(function (skill, index) {
            return <li key={index}>{skill}</li>;
          })}
        </ul>
      </Col>
    );
};

export default Skills;