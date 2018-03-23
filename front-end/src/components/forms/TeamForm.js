import React from "react";
import { Form, FormGroup, ControlLabel, FormControl, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

import CancelButton from "./CancelButton";

class TeamForm extends React.Component {
  constructor (props, title, onSubmitAction) {
    super(props);
    this.state = {
      name: props.name || "",
      title: title || "Add a New Team"
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onSubmitAction = onSubmitAction || this.props.createItem;
  }

  onInputChange (evt) {
    const target = evt.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };

  getValidationState () {
    const teamNameLength = this.state.name.length;
    if (teamNameLength > 0 && teamNameLength <= 50) {
      return "success";
    } else {
      return "error";
    }
  };

  handleSubmit () {
    const { name } = this.state;
    const validationState = this.getValidationState();

    if (validationState === "error") {
      return false;
    } else {
      if (this.state.title === "Edit Team") {
        let _id = this.props.teamId;
        this.onSubmitAction(_id, name);
        this.props.history.push("/");
      } else {
        this.onSubmitAction({ name });
        this.props.history.push("/");
      }
    }
  }

  render () {
    let buttonText = (this.state.title === "Edit Team") ? "Edit Team" : "Add Team";
    const isDisabled = this.getValidationState() === "error" ? this.state.isDisabled = true : this.state.isDisabled = false;

    return (
      <div className="row">
        <div className="form-section col-md-6 offset-md-3 col-xs-12">
          <div className="panel-heading">
            <h3 className="panel-title">{this.state.title}<sup><i className="fa fa-asterisk required"></i></sup></h3>
          </div>
          <hr />
          <Form>
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
              bsStyle="primary"
              disabled={isDisabled}
              onClick={this.handleSubmit}>
              {buttonText}
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