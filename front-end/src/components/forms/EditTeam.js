import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import AddTeam from "./AddTeam";

import { updateTeam } from "../../actions";

class EditTeam extends AddTeam {
  constructor (props) {
    super(props, "Edit Team", props.updateTeam);
  }
}

const mapStateToProps = (state, props) => {
  let team = state.teams.find((item) => {
    return item._id === props.teamId;
  });

  return {
    id: team._id,
    name: team.name
  };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ updateTeam }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(EditTeam);