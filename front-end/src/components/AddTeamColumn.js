import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import FontAwesome from "react-fontawesome";

class AddTeamColumn extends React.Component {
  render () {
    return (
        <Link to="/team/add">
        <Button className="add-team-button">
          <span className="content">
            <FontAwesome
              name="plus-circle"
            />
            Add Team Column
          </span>
        </Button>
      </Link>
    );
  }
}

export default AddTeamColumn;