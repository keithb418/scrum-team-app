import React from "react";
import { connect } from "react-redux";
import { Form, FormGroup, ControlLabel, FormControl, Button } from "react-bootstrap";

import CancelButton from "./CancelButton";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { createTeam } from "../../actions";

class AddTeam extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      name: ""
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
    const { name } = this.state

    this.props.createTeam({ name })
  }

  render () {
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
            <Button onClick={this.handleCreateTeam}>Add Team</Button>       
            <CancelButton />
          </Form>
        </div>
      </div>
    );
  };
};

const mapStateToProps = (state, props) => {
  return {
    teams: state.teams,
    error: state.error && state.erro.message
  }
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ createTeam }, dispatch)

AddTeam.propTypes = {
  dispatch: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTeam)