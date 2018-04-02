import React, { Component } from "react";
import { Form, FormGroup, ControlLabel, FormControl, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

import CancelButton from "./CancelButton";

class TeamForm extends Component {
  constructor (props) {
    super(props);
    this.state = {
      name: props.team ? props.team.name : "",
      title: props.title || "Add a New Team"
    };
  }

  onInputChange = (evt) => {
    const target = evt.target;
    const value = target.value;
    const name = target.name;

    this.setState(() => ({
      [name]: value
    }));
  };

  getValidationState = () => {
    const teamNameLength = this.state.name.length;
    if (teamNameLength > 0 && teamNameLength <= 50) {
      return "success";
    } else {
      return "error";
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name } = this.state;
    const validationState = this.getValidationState();

    if (validationState === "error") {
      return false;
    } else {
        let _id = this.props.teamId;
        this.props.onSubmit({ name });   
      } 
  }

  render () {
    const isDisabled = this.getValidationState() === "error" ? this.state.isDisabled = true : this.state.isDisabled = false;

    return (
      <div className="row">
        <div className="form-section col-md-6 offset-md-3 col-xs-12">
          <div className="panel-heading">
            <h3 className="panel-title">{this.state.title}<sup><i className="fa fa-asterisk required"></i></sup></h3>
          </div>
          <hr />
          <Form onSubmit={this.handleSubmit}>
            <FormGroup controlId="team">
              <FormControl
                type="text"
                name="name"
                value={this.state.name}
                placeholder="Enter team name"
                onChange={this.onInputChange}
              />
              <FormControl.Feedback />
            </FormGroup>
            <Button
              type="submit"
              bsStyle="primary"
              disabled={isDisabled}>
              {this.props.title}
            </Button>
            <CancelButton />
          </Form>
        </div>
      </div>
    );
  };
};

TeamForm.propTypes = {
  handleSubmit: PropTypes.func
};

export default TeamForm;