import React from "react";
import {Form, FormGroup, FormControl, ControlLabel, InputGroup, Button} from "react-bootstrap";
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
          {/* <FieldGroup id="name" type="text" value={this.state.name} label="Name" name="name" placeholder="Enter your name" onChange={this.onInputChange}/>

          <FieldGroup id="email" type="email" value={this.state.email} label="Email" name="email" placeholder="Enter your email" onChange={this.onInputChange}/>

          <FieldGroup id="teamLead" type="checkbox" checked={this.state.teamLead} label="Team Lead" name="teamLead" onChange={this.onInputChange}/> */}

          <SelectTeam teams={teams} onSelect={() => {}} />
          <SelectRole roles={roles} onSelect={() => {}} />

          <Button type="submit" bsStyle="primary" onClick={this.submitForm}>Add Team Member</Button>
          <Button type="reset" bsStyle="danger">Reset</Button>
        </Form>
      </div>
    );
  }

  FieldGroup({id, label, ...props}) {
    return(
      <FormGroup controlId={id}>
        <ControlLabel>{label}</ControlLabel>
        <FormControl {...props}/>
      </FormGroup>
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