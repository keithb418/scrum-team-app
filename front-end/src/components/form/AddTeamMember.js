import React from "react";
import {FormGroup, FormControl, InputGroup} from "react-bootstrap";
import FontAwesome from "react-fontawesome";

export default class AddTeamMember extends React.Component {
  constructor(props) {
    super(props);

    this.getInput = this.getInput.bind(this);
    this.resetInput = this.resetInput.bind(this);

    this.state = {
      name: "",
      email: "",
      isTeamLead: false
    }
  }

  getInput() {
    return document.getElementById(this.props.id).value;
  }

  resetInput() {
    document.getElementById(this.props.id).value = "";
  }
}