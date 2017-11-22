import { connect } from "react-redux";
import TeamColumns from "../components/TeamColumns";

const mapStateToProps = (state, ownProps) => {
  let teams = state.teams;
  let teamMembers = state.teamMembers;

  return {
    teams,
    teamMembers
  };
};

const TeamColumnsContainer = connect(mapStateToProps)(TeamColumns);

export default TeamColumnsContainer;