import React from "react";
import { Form, FormGroup, FormControl, ControlLabel, Button, Checkbox } from "react-bootstrap";
import FontAwesome from "react-fontawesome";
import PropTypes from "prop-types";

import SelectRole from "./SelectRole";
import SelectTeam from "./SelectTeam";
import AddSkills from "./AddSkills";
import CancelButton from "./CancelButton";

class TeamMemberForm extends React.Component {
  constructor (props, title, onSubmitAction) {
    super(props);
    this.state = {
      name: "",
      email: "",
      team: "",
      teamLead: false,
      role: "",
      skiils: []
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.onSkillsChange = this.onSkillsChange.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
    this.onSubmitAction = onSubmitAction;
    this.title = title;
  }

  onInputChange (e) {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  onSkillsChange (skills) {
    this.setState({
      skills
    });
  }
  
  onSubmitForm () {
    const { name, email, team, teamLead, role, skills } = this.state;

    this.onSubmitAction({ name, email, team, teamLead, role, skills });
    this.props.navigate("");
  }

  render () {
    return(
      <div className="row">
        <div className="col-md-8">
          <h3>{this.title}</h3>
          <Form>
            <ControlLabel>Name</ControlLabel>
            <FormGroup controlId="name">
              <FormControl
                type="text"
                name="name"
                placeholder="Enter your name"
                value={this.state.name}
                onChange={this.onInputChange}
              />
            </FormGroup>

            <ControlLabel>Email</ControlLabel>
            <FormGroup controlId="email">
              <FormControl
                type="email"
                name="email"
                placeholder="Enter your email"
                value={this.state.email}
                onChange={this.onInputChange}
              />
            </FormGroup>

            <FormGroup controlId="teamLead">
              <Checkbox
                name="teamLead"
                value={this.state.teamLead}
                onChange={this.onInputChange}
                inline>Team Lead
              </Checkbox>
            </FormGroup>

            <SelectTeam teams={this.props.teams} onSelect={(e) => {
              this.onInputChange(e);
            }} />

            <SelectRole roles={this.props.roles} onSelect={(e) => {
              this.onInputChange(e);
            }} />

            <AddSkills id="add-skills" onChange={this.onSkillsChange} />

            <Button bsStyle="primary" onClick={this.onSubmitForm}>
              {this.title}
            </Button>
            <Button type="reset" bsStyle="danger">Reset</Button>
            <CancelButton />
          </Form>
        </div>
      </div>
    );
  }
};

TeamMemberForm.propTypes = {
  navigate: PropTypes.func,
  createTeamMember: PropTypes.func,
  roles: PropTypes.array,
  teams: PropTypes.array,
  teamMember: PropTypes.object
};

export default TeamMemberForm;