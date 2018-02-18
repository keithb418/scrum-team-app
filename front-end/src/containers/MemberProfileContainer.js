import { connect } from "react-redux";

import MemberProfile from "../components/MemberProfile";

const mapStateToProps = (state, props) => {
  const member = state.teamMembers.find(member => {
    return member._id === props.match.params.id;
  });

  const team = state.teams.find(team => {
    return team._id === member.team;
  });

  return {
    member,
    team,
  };

};

const MemberProfileContainer = connect(mapStateToProps)(MemberProfile);

export default MemberProfileContainer;