import React from "react";
import { FormGroup, ControlLabel, FormControl } from "react-bootstrap";
import PropTypes from "prop-types";

const SelectTeam = ({ teams = [], selected = "", onSelect }) => {
  return (
    <FormGroup controlId="teamSelect">
      <ControlLabel>Team<sup><i className="fa fa-asterisk required"></i></sup></ControlLabel>
      <FormControl
        name="team"
        defaultValue={selected}
      	componentClass="select"
      	placeholder="Select Team"
      	onChange={onSelect} >

        <option>Select Team</option>

        {teams.map(team =>
          <option
            value={team._id}
            key={team._id}>{team.name}</option>
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