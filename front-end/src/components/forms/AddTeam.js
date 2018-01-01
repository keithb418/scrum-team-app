import React from "react";
import { connect } from "react-redux";
import { Form, FormGroup, ControlLabel, FormControl, Button } from "react-bootstrap";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";

import CancelButton from "./CancelButton";
import { createTeam } from "../../actions";

class AddTeam extends React.Component {
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
      let id = this.props.id;
      this.onSubmitAction(id, { name });
    }
    else
      this.onSubmitAction({ name });
    this.props.navigate("");
  }

  render () {

    let buttonText = (this.state.title === "Edit Team") ? "Edit Team" : "Add Team";
    return (
      <div className="row">
        <div className="col-md-8">
          <h3>{this.state.title}</h3>
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

// const mapStateToProps = (state, props) => {
//   return {
//     error: state.error && state.error.message
//   };
// };

// const mapDispatchToProps = (dispatch) =>
//   bindActionCreators({ createTeam }, dispatch);

// AddTeam.propTypes = {
//   createTeam: PropTypes.func,
//   navigate: PropTypes.func
// };

export default AddTeam;