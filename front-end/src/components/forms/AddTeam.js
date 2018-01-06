import React from "react";
import { connect } from "react-redux";
import { Form, FormGroup, ControlLabel, FormControl, Button } from "react-bootstrap";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";

import CancelButton from "./CancelButton";
import { createTeam } from "../../actions";

class AddTeam extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      name: "",
      title: "Add a New Team"
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.handleCreateTeam = this.handleCreateTeam.bind(this);
  }

  onInputChange (evt) {
    const target = evt.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleCreateTeam () {
    const { name } = this.state;

    this.props.createTeam({ name });
    this.props.navigate("");
  }

  render () {
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
            <Button bsStyle="primary" onClick={this.handleCreateTeam}>Add Team</Button>
            <CancelButton />
          </Form>
        </div>
      </div>
    );
  };
};

const mapStateToProps = (state, props) => {
  return {
    error: state.error && state.erro.message
  };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ createTeam }, dispatch);

AddTeam.propTypes = {
  createTeam: PropTypes.func,
  navigate: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTeam);