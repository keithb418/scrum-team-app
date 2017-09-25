import React from "react";
import {FormGroup, FormControl, InputGroup} from "react-bootstrap";
import FontAwesome from "react-fontawesome";

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
    return(
      <div>
        <h3>{this.state.title}</h3>
        <Form inline>
          <FieldGroup id="name" type="text" value={this.state.name} label="Name" name="name" placeholder="Enter your name" onChange={this.onInputChange}/>

          <FieldGroup id="email" type="email" value={this.state.email} label="Email" name="email" placeholder="Enter your email" onChange={this.onInputChange}/>

          <FieldGroup id="teamLead" type="checkbox" checked={this.state.teamLead} label="Team Lead" name="teamLead" onChange={this.onInputChange}/>

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