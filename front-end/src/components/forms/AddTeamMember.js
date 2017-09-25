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
      isTeamLead: false
    }
  }

  render() {
    let formTitle = this.state.title;
    let teamMemberName = this.state.name;
    let teamMemberEmail = this.state.email;
    let isTeamLeadStatus = this.state.isTeamLead;

    return(
      <div>
        <FormGroup controlId={this.props.id}>
          <ControlLabel>Name</ControlLabel>
          <FormControl type="text" placeholder="Enter your full name"/>

          <ControlLabel>Email</ControlLabel>
          <FormControl type="email" placeholder="Enter your email"/>

          <Button type="submit" bsStyle="primary">Add Team Member</Button>
          <Button type="reset" bsStyle="danger">Reset</Button>
        </FormGroup>
      </div>
    )
  }

  getInput() {
    return document.getElementById(this.props.id).value;
  }

  resetInput() {
    document.getElementById(this.props.id).value = "";
  }
}