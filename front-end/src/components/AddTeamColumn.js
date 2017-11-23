import React from "react";
import { connect } from "react-redux";
import { Button } from "react-bootstrap";
import FontAwesome from "react-fontawesome";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { navigate } from "../actions";

let AddTeamColumn = ({ navigate }) => {
  return (
    <Button className="add-team-button" onClick={() => navigate("add-team")}>
      <span className="content">
        <FontAwesome
          name="plus-circle"
        />
        Add Team Column
      </span>
    </Button>
  );
};

const mapStateToProps = (state, props) => {
  return {
    error: state.error && state.erro.message
  };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ navigate }, dispatch);

  AddTeamColumn.propTypes = {
    dispatch: PropTypes.func
  };

export default connect(mapStateToProps, mapDispatchToProps)(AddTeamColumn);