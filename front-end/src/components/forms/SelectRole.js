import React from "react";
import { FormGroup, ControlLabel, FormControl } from "react-bootstrap";
import PropTypes from "prop-types";

const SelectRole = ({ roles = [], selected = "", onSelect }) => {
  return (
    <FormGroup controlId="roleSelect">
      <ControlLabel>Role</ControlLabel>
      <FormControl
        name="role"
        defaultValue={selected}
        componentClass="select"
        placeholder="Select Role"
        onChange={ onSelect }>

        <option>Select Role...</option>

        {roles.map(role =>
          <option
            value={role.name}
            key={role._id}>{role.name}</option>
        )}

      </FormControl>
    </FormGroup>
  );
};

SelectRole.propTypes = {
  onSelect: PropTypes.func,
  roles: PropTypes.array,
};

export default SelectRole;