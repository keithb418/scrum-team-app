import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Row, Col, Panel } from "react-bootstrap";
import { fetchProfileData } from "../actions/shared";
import FontAwesome from "react-fontawesome";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { capitalizeFirstLetter } from "../utils/stringHelpers";
import Loading from "./Loading";
import Profile from "./Profile";
import Skills from "./Skills";

export class MemberProfile extends Component {
  constructor () {
    super();
  }
 
  componentDidMount () {
    this.props.fetchProfileData(this.props.match.params.id);
  }
 
  render () {
    const { teamMember, team } = this.props;
    return !teamMember ?
        <Loading /> :
        <Row>
          <Col className="profile-section" md={6} mdOffset={3} xs={12}>
            <Panel.Heading>
              <h3 className="panel-title">{team.name}</h3>
            </Panel.Heading>
            <hr />
            <div className="member-profile-subheading">
              <FontAwesome name="user-circle" className="member-img" />
              <p>{teamMember.name}</p>
            </div>
            <hr />
            <Row>
              <Profile 
                member={teamMember}/>
              <Skills 
                member={teamMember}/>
            </Row>
            <hr />
            <Link to={`/member/${teamMember._id}/edit`}>
              <Button bsStyle="primary">Edit</Button>
            </Link>
            <Link to="/">
              <Button>Back to Dashboard</Button>
            </Link>
          </Col>
        </Row>;
  }
};

MemberProfile.defaultProps = {
  team: {
    name: ""
  },
  isFetching: true
};

MemberProfile.propTypes = {
  teamMember: PropTypes.object,
  team: PropTypes.object
};

const mapStateToProps = ({ teamMembers: { teamMember }, teams: { teams } }) => {
  if(teamMember) {
    const team = teams.find(team => {
      return team._id === teamMember.team;
    });
    return {
      team,
      teamMember
    };
  } else {
    return {
      teamMember
    };
  }  
};

const mapDispatchToProps = (dispatch) => ({
  fetchProfileData: (id) => dispatch(fetchProfileData(id))
});


export default connect(mapStateToProps, mapDispatchToProps)(MemberProfile);