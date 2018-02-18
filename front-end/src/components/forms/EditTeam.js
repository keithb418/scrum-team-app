import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import TeamForm from "./TeamForm";

import { updateTeam } from "../../actions";

class EditTeam extends TeamForm {
  constructor (props) {
    super(props, "Edit Team", props.updateTeam);
  }
}

const mapStateToProps = (state, props) => {
  let team = state.teams.find((item) => {
    return item._id === props.match.params.id;
  });

  return {
    teamId: team._id,
    name: team.name,
    error: state.error && state.error.message
  };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ updateTeam }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(EditTeam);