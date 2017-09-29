import React from 'React';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

const SelectRole = ({ roles, onSelect }) => {
  return (
    <FormGroup controlId="formControlSelect">
      <FormControl
        componentClass="select"
        placeholder="Select Role"
        onChange={ this.props.onSelect }
      >

      {roles.map(role => {
        <option value={role} key={role}>{role}</option>
      })}
      
      </FormControl>
    </FormGroup>
  );
};

export default SelectRole;