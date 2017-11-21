import React from "react";
import { connect } from "react-redux";
import { Button } from "react-bootstrap";

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

export default CancelButton;
