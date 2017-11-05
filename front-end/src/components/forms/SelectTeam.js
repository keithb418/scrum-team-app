import React from "react";
import {FormGroup, ControlLabel, FormControl} from "react-bootstrap";

const SelectTeam = ({ teams = [], onSelect }) => {
  return (
    <FormGroup controlId="formControlsSelect">
      <FormControl
      	componentClass="select"
      	placeholder="Select Team"
      	onChange={onSelect} >

      {teams.map(team => {
      	return <option value={team._id} key={team._id}>{team.name}</option>
      })}

      </FormControl>
    </FormGroup>
  );
};

export default SelectTeam;