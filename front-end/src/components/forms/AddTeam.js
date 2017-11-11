import React from "react";
import { connect } from "react-redux";
import { Form, FormGroup, ControlLabel, FormControl, Button } from "react-bootstrap";

let teamId = 200;

class AddTeam extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      team: "",
      title: "Add a New Team"
    };
    this.onInputChange = this.onInputChange.bind(this);
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
                name="team"
                placeholder="Enter team name"
                onChange={this.onInputChange}
              />
            </FormGroup>
            <Button onClick={() => {
              this.props.dispatch({
                type: "ADD_TEAM",
                team: {
                  "_id": `${teamId++}team`,
                  "name": this.state.team
                }
              });

              this.props.dispatch({
                type: "CHANGE_ROUTE",
                route: ""
              });
            }}>Add Team
            </Button>
          </Form>
        </div>
      </div>
    );
  };

  onInputChange (e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
};

AddTeam = connect()(AddTeam);


export default AddTeam;