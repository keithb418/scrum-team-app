import React from "react";
import { connect } from "react-redux";
import { Button } from "react-bootstrap";
import FontAwesome from "react-fontawesome";

let AddTeamColumn = ({ dispatch }) => {
  return (
    <Button className="add-team-button" onClick={() => dispatch({
      type: "CHANGE_ROUTE",
      route: "add-team"
    })}>
      <span className="content">
        <FontAwesome
          name="plus-circle"
        />
        Add Team Column
      </span>
    </Button>
  );
};

AddTeamColumn = connect()(AddTeamColumn);

export default AddTeamColumn;
