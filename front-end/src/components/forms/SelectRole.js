import React from "react";
import { FormGroup, ControlLabel, FormControl } from "react-bootstrap";

const SelectRole = ({ roles = [], onSelect }) => {
  return (
    <FormGroup controlId="formControlSelect">
      <FormControl
        componentClass="select"
        placeholder="Select Role"
        onChange={ onSelect }
      >

      {roles.map(role => {
        return <option value={role} key={role}>{role}</option>;
      })}

      </FormControl>
    </FormGroup>
  );
};

export default SelectRole;