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
  }

  handleSubmit () {
    const { name } = this.state;
    if (this.state.title === "Edit Team") {
      let _id = this.props.teamId;
      this.onSubmitAction(_id, name);
    } else {
      this.onSubmitAction({ name });
      this.props.history.push("/");
    }
  }

  render () {
    let buttonText = (this.state.title === "Edit Team") ? "Edit Team" : "Add Team";
    return (
      <div className="row">
        <div className="form-section panel">
          <div className="panel-heading">
            <h3 className="panel-title">{this.state.title}</h3>
          </div>
          <Form>
            <FormGroup controlId="team">
              <FormControl
                type="text"
                name="name"
                value={this.state.name}
                placeholder="Enter team name"
                onChange={this.onInputChange}
              />
            </FormGroup>
            <Button onClick={this.handleSubmit}>{buttonText}</Button>
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