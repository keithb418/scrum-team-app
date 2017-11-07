import React from "react";
import { connect } from "react-redux";
import { FormGroup, ControlLabel, FormControl, Button } from "react-bootstrap";

let teamId = 200;

class AddTeam extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      team: "",
      title: "Add a New Team"
    };
    this.onInputChange = this.onInputChange.bind(this);
  }

  render() {
    return (
      <div class="row">
        <div class="col-md-8">
          <h3>{this.state.title}</h3>
          <Form>
            <FormGroup controlId="team">
              <FormControl
                type="text"
                placeholder="Enter team name"
                onChange={this.onInputChange}
              />
            </FormGroup>
            <Button onClick={() => dispatch({
              type: "ADD_TEAM",
              team: {
                "_id": `${teamId++}team`,
                "team": this.state.team
              }
            })}>Add Team
            </Button>
          </Form>
        </div>
      </div>
    );
  };

  onInputChange() {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
};

AddTeam = connect((state, ownProps) => {
  return {
    name: state.name
  }
})(AddTeam);


export default AddTeam;