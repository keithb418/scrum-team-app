import React from "react";
import {FormGroup, FormControl, InputGroup} from "react-bootstrap";
import FontAwesome from "react-fontawesome";

export default class AddTeamMember extends React.Component {
  constructor(props) {
    super(props);

    this.getInput = this.getInput.bind(this);
    this.resetInput = this.resetInput.bind(this);

    this.state = {
      title: "Add Team Member",
      name: "",
      email: "",
      teamLead: false
    }
  }

  render() {
    return(
      <Form inline>
        <FieldGroup id="name" type="text" label="Name" placeholder="Enter your name" required/>
        <FieldGroup id="email" type="email" label="Email" placeholder="Enter your email" required/>
        <FieldGroup id="teamLead" type="checkbox" label="Team Lead"/>

        <Button type="submit" bsStyle="primary" onClick={this.submitForm}>Add Team Member</Button>
        <Button type="reset" bsStyle="danger">Reset</Button>
      </Form>
    )
  }

  FieldGroup({id, label, ...props}) {
    return(
      <FormGroup controlId={id}>
        <ControlLabel>{label}</ControlLabel>
        <FormControl {...props}/>
      </FormGroup>
    );
  }

  getInput() {
    return document.getElementById(this.props.id).value;
  }

  resetInput() {
    document.getElementById(this.props.id).value = "";
  }
}