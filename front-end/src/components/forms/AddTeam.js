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
    this.onInputChange = this.onInputChange.bind(this);
  }

  render() {
    return (
      <div>
        <h3>{this.state.title}</h3>
        <FormGroup controlId="team">
          <FormControl
            type="text"
            placeholder="Enter team name"
            onChange={this.onInputChange}
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
  };

  onInputChange() {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
};


export default AddTeam;