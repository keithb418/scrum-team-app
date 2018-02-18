import React from "react";
import { connect } from "react-redux";

const mapStateToProps = (state, props) => {
  const member = state.teamMembers.find(member => {
    return member._id === props.match.params.id;
  });

  return {
    member
  };
};

let TeamMemberProfile = ({ member }) =>
<span>{ member.email }</span>;

TeamMemberProfile = connect(mapStateToProps)(TeamMemberProfile);

export default TeamMemberProfile;


