import React from "react";
import {Form, FormGroup, FormControl, ControlLabel, Button} from "react-bootstrap";
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

    let teamMemberId = 100;

    return(
      <div>
        <h3>{this.state.title}</h3>
        <Form inline>
          <ControlLabel>Name</ControlLabel>
          <FormControl controlId="name">
            <FormGroup
              type="text"
              name="name"
              placeholder="Enter your name"
              value={this.state.name}
              onChange={this.onInputChange}
            />
          </FormControl>

          <ControlLabel>Email</ControlLabel>
          <FormGroup controlId="email">
            <FormControl
              type="email"
              name="email"
              placeholder="Enter your email"
              value={this.state.email}
              onChange={this.onInputChange}
            />
          </FormGroup>

          <FormGroup controlId="teamLead">
            <Checkbox
              name="teamLead"
              value={this.state.teamLead}
              onChange={this.onInputChange}
              inline>Team Lead
            </Checkbox>
          </FormGroup>

          <SelectTeam teams={teams} onSelect={() => {}} />
          <SelectRole roles={roles} onSelect={() => {}} />

          <Button type="submit" bsStyle="primary" onClick={() => dispatch({
            type: "ADD_TEAM_MEMBER",
            teamMember: {
              "_id": `${teamMemberId++}teamMember`,
              "name": this.state.name,
              "email": this.state.email,
              "team": "",
              "teamHistory": ["ReactDojo", "AngularDojo"],
              "role": "Front-End Developer",
              "skills": ["React", "Redux", "Angular"]
            }
          })}>
            Add Team Member
          </Button>
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