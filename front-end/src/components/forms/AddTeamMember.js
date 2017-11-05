import React from "react";
import { connect } from "react-redux";
import { Form, FormGroup, FormControl, ControlLabel, Button, Checkbox } from "react-bootstrap";
import FontAwesome from "react-fontawesome";
import SelectRole from "./SelectRole";
import SelectTeam from "./SelectTeam";

class AddTeamMember extends React.Component {
  constructor (props) {
    super(props);

    this.onInputChange = this.onInputChange.bind(this);

    this.state = {
      title: "Add Team Member",
      name: "",
      email: "",
      teamLead: false
    };
  }

  render () {

    let roles = [
      "Front-End Developer",
      "Back-End Developer"
    ];

    let teamMemberId = 100;
    
    return(
      <div className="row">
        <div className="col-md-8">
          <h3>{this.state.title}</h3>
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

            <SelectTeam teams={this.props.teams} onSelect={() => {}} />
            <SelectRole roles={roles} onSelect={() => {}} />

            <Button type="submit" bsStyle="primary" onClick={() => this.props.dispatch({
              type: "ADD_TEAM_MEMBER",
              teamMember: {
                "_id": `${teamMemberId++}teamMember`,
                "name": this.state.name,
                "email": this.state.email,
                "team": "",
                "teamHistory": ["ReactDojo", "AngularDojo"],
                "role": "Front-End Developer",
                "skills": ["React", "Redux", "Angular"]
              }
            })}>
              Add Team Member
            </Button>
            <Button type="reset" bsStyle="danger">Reset</Button>
          </Form>
        </div>
      </div>
    );
  }

  onInputChange (e) {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
};

AddTeamMember = connect(state => {
  return {
    teams: state.teams,
    roles: state.roles
  };
})(AddTeamMember);

export default AddTeamMember;