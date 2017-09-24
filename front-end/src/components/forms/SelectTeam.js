import React from "react";
import {FormGroup, ControlLabel, FormControl} from "react-bootstrap";

const SelectTeam = ({ teams, onSelect }) => {
  return (
    <FormGroup controlId="formControlsSelect">
      <FormControl
      	componentClass="select"
      	placeholder="Select Team"
      	onChange={this.props.onSelect} >

      {teams.map(team => {
      	<option value={team} key={team}>{team}</option>
      })}
      
      </FormControl>
    </FormGroup>
  );
};

export default SelectTeam;