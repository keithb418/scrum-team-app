import React from "react";
import { connect } from "react-redux";
import { Button } from "react-bootstrap";
import PropTypes from "prop-types";

let CancelButton = ({ dispatch }) => {
  return (
    <Button onClick={() => {
      dispatch({
        type: "CHANGE_ROUTE",
        route: ""
      });
    }}>Cancel</Button>
  );
};

CancelButton = connect()(CancelButton);

CancelButton.propTypes = {
  dispatch: PropTypes.func,
};

export default CancelButton;
