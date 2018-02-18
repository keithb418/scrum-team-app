import { connect } from "react-redux";

import TeamMemberProfile from "../components/TeamMemberProfile";

const mapStateToProps = (state, props) => {
  const member = state.teamMembers.find(member => {
    return member._id === props.match.params.id;
  });

  console.log(member);

  return {
    member
  };

};

const TeamMemberProfileContainer = connect(mapStateToProps)(TeamMemberProfile);

export default TeamMemberProfileContainer;