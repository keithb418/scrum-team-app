import React from "react";
import { Button } from "react-bootstrap";
import FontAwesome from "react-fontawesome";

const AddTeamColumn = () => {
  return (
    <Button className="add-team-button">
      <span className="content">
        <FontAwesome
          name="plus-circle"
        />
        Add Team Column
      </span>
    </Button>
  );
};

export default AddTeamColumn;
