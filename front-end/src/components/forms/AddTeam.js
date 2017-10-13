import React from "react";
import {FormGroup, ControlLabel, FormControl, Button} from "react-bootstrap";

let teamId = 200;

export default class AddTeam extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      team: "",
      title: "Add a New Team"
    };
  }

  render() {
    return (
      <div>
        <h3>{this.state.title}</h3>
        <FormGroup controlId="team">
          <FormControl
            type="text"
            placeholder="Enter team name"
          />
        </FormGroup>
        <Button onClick={() => dispatch({
          type: "ADD_TEAM",
          "_id": `${teamId++}team`,
          "team": this.state.team
        })}>
          Add Team
        </Button>
      </div>
    );
  }
};


export default AddTeam;