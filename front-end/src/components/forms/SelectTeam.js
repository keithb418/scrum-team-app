import React from "react";
import { FormGroup, ControlLabel, FormControl } from "react-bootstrap";

const SelectTeam = ({ teams = [], onSelect }) => {
  return (
    <FormGroup controlId="teamSelect">
      <ControlLabel>Team</ControlLabel>
      <FormControl
      	componentClass="select"
      	placeholder="Select Team"
      	onChange={onSelect} >

        <option>Select Team...</option>
        
        {teams.map(team => 
          <option value={team._id} key={team._id}>{team.name}</option>
        )}

      </FormControl>
    </FormGroup>
  );
};

export default SelectTeam;