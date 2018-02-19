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
      name: props.name || "",
      email: props.email || "",
      team: props.team || "",
      teamLead: props.teamLead || false,
      role: props.role || "",
      skills: props.skills || []
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.onSkillsChange = this.onSkillsChange.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
    this.onSubmitAction = onSubmitAction;
    this.title = title;
    this.id = props.id;
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

    this.onSubmitAction({ name, email, team, teamLead, role, skills, _id: this.id });
    this.props.history.push("/");
  }

  render () {
    return(
      <div className="row">
        <div className="form-section col-md-6 offset-md-3 col-xs-12">
          <div className="panel-heading">
            <h3 className="panel-title">{this.title}</h3>
          </div>
          <hr />
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
              <span className="right-spacer">Team Lead</span>
              <Checkbox
                name="teamLead"
                value={this.state.teamLead}
                checked={this.state.teamLead ? "checked" : ""}
                onChange={this.onInputChange}
                inline>
              </Checkbox>
            </FormGroup>

            <SelectTeam name="team" teams={this.props.teams} selected={this.state.team} onSelect={(e) => {
              this.onInputChange(e);
            }} />

            <SelectRole roles={this.props.roles} selected={this.state.role} onSelect={(e) => {
              this.onInputChange(e);
            }} />

            <AddSkills id="add-skills" onChange={this.onSkillsChange} skills={this.state.skills} />

            <Button bsStyle="primary" onClick={this.onSubmitForm}>
              {this.title}
            </Button>
            <Button type="reset">Reset</Button>
            <CancelButton />
          </Form>
        </div>
      </div>
    );
  }
};

TeamMemberForm.propTypes = {
  createTeamMember: PropTypes.func,
  roles: PropTypes.array,
  teams: PropTypes.array,
  teamMember: PropTypes.object
};

export default TeamMemberForm;