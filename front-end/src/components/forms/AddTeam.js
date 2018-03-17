import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import TeamForm from "./TeamForm";

import { createTeam } from "../../actions/teams";

class AddTeam extends TeamForm {
  constructor (props) {
    super(props, "Add Team", props.createTeam);
  }
}

const mapStateToProps = (state, props) => {
  return {
    error: state.error && state.error.message
  };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ createTeam }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AddTeam);