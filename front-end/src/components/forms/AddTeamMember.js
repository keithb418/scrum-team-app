import React from "react";
import {Form, FormGroup, FormControl, ControlLabel, Button, Checkbox} from "react-bootstrap";
import FontAwesome from "react-fontawesome";

import SelectRole from "./SelectRole";
import SelectTeam from "./SelectTeam";

export default class AddTeamMember extends React.Component {
  constructor(props) {
    super(props);

    this.onInputChange = this.onInputChange.bind(this);

    this.state = {
      title: "Add Team Member",
      name: "",
      email: "",
      teamLead: false
    }
  }

  render() {
    let teams = [
      "ReactDojo",
      "AngularDojo",
      "BackboneDojo"
    ];

    let roles = [
      "Front-End Developer",
      "Back-End Developer"
    ];

    return(
      <div>
        <h3>{this.state.title}</h3>
        <Form inline>
          <ControlLabel>Name</ControlLabel>
          <FormControl controlId="name">
            <FormGroup
              type="text"
              placeholder="Enter your name"
              value={this.state.name}
            />
          </FormControl>

          <ControlLabel>Email</ControlLabel>
          <FormGroup controlId="email">
            <FormControl
              type="email"
              placeholder="Enter your email"
              value={this.state.email}
            />
          </FormGroup>

          <FormGroup controlId="teamLead">
            <Checkbox 
              value={this.state.teamLead}
              inline>Team Lead</Checkbox>
          </FormGroup>

          <SelectTeam teams={teams} onSelect={() => {}} />
          <SelectRole roles={roles} onSelect={() => {}} />

          <Button type="submit" bsStyle="primary" onClick={this.submitForm}>Add Team Member</Button>
          <Button type="reset" bsStyle="danger">Reset</Button>
        </Form>
      </div>
    );
  }

  onInputChange() {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
}