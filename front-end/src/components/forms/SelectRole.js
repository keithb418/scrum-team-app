import React from "react";
import { FormGroup, ControlLabel, FormControl } from "react-bootstrap";

const SelectRole = ({ roles = [], onSelect }) => {
  return (
    <FormGroup controlId="roleSelect">
      <ControlLabel>Role</ControlLabel>
      <FormControl
        name="role"
        componentClass="select"
        placeholder="Select Role"
        onChange={ onSelect }
      >

      <option>Select Role...</option>

      {roles.map(role =>
        <option value={role.name} key={role._id}>{role.name}</option>
      )}

      </FormControl>
    </FormGroup>
  );
};

export default SelectRole;