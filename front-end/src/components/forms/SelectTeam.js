import React from "react";
import { FormGroup, ControlLabel, FormControl } from "react-bootstrap";
import PropTypes from "prop-types";

const SelectTeam = ({ teams = [], onSelect }) => {
  return (
    <FormGroup controlId="teamSelect">
      <ControlLabel>Team</ControlLabel>
      <FormControl
        name="team"
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

SelectTeam.propTypes = {
  onSelect: PropTypes.func,
  teams: PropTypes.array,
};

export default SelectTeam;