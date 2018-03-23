import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Row, Col, Panel } from "react-bootstrap";
import { fetchInitialData } from '../actions/shared'
import FontAwesome from "react-fontawesome";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { capitalizeFirstLetter } from "../utils/stringHelpers";

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
  )
}


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
  )
}


class MemberProfile extends Component {
  constructor(props) {
    super(props)
  }
 
  componentDidMount() {
    this.props.dispatch(fetchInitialData())
  }
  render () {
    const { member, team } = this.props;
    const id = member._id;
    return (
      <Row>
        <Col className="profile-section" md={6} mdOffset={3} xs={12}>
          <Panel.Heading>
            <h3 className="panel-title">{team.name}</h3>
          </Panel.Heading>
          <hr />
          <div className="member-profile-subheading">
            <FontAwesome name="user-circle" className="member-img" />
            <p>{member.name}</p>
          </div>
          <hr />
          <Row>
            <Profile 
              member={member}/>
            <Skills 
              member={member}/>
          </Row>
          <hr />
          <Link to={`/member/${id}/edit`}>
            <Button bsStyle="primary">Edit</Button>
          </Link>
          <Link to="/">
            <Button>Back to Dashboard</Button>
          </Link>
        </Col>
      </Row>
    );
  }
};

MemberProfile.propTypes = {
  member: PropTypes.object,
  team: PropTypes.object
};

const mapStateToProps = ({teamMembers, teams}, props) => {
  const member = teamMembers.find(member => {
    return member._id === props.match.params.id;
  });

  const team = teams.find(team => {
    return team._id === member.team;
  });

  return {
    member,
    team,
  };

};


export default connect(mapStateToProps)(MemberProfile);