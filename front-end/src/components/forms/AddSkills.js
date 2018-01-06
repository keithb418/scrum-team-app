import React from "react";
import { FormGroup, FormControl, InputGroup, ControlLabel } from "react-bootstrap";
import FontAwesome from "react-fontawesome";
import PropTypes from "prop-types";

export default class AddSkills extends React.Component {
  constructor (props) {
    super(props);
    this.onAdd = this.onAdd.bind(this);
    this.onRemove = this.onRemove.bind(this);
    this.getInput = this.getInput.bind(this);
    this.resetInput = this.resetInput.bind(this);
    this.state = { skills: this.props.skills || [] };
  }

  onAdd () {
    let skillToAdd = this.getInput();
    let newSkills = this.state.skills;
    newSkills.push(skillToAdd);
    this.resetInput();
    this.props.onChange(newSkills);
    this.setState({ skills: newSkills });
  }

  onRemove (e) {
    let skillToRemove = e.target.parentNode.innerText;
    let newSkills = this.state.skills;
    newSkills.splice(newSkills.indexOf(skillToRemove), 1);
    this.props.onChange(newSkills);
    this.setState({ skills: newSkills });
  }

  getInput () {
    return document.getElementById(this.props.id).value;
  }

  resetInput () {
    document.getElementById(this.props.id).value = "";
  }

  render () {
    let skillsToAdd = this.state.skills;
    return (
      <div className="add-skills">
        <FormGroup controlId={this.props.id} style={{ width: "200px" }}>
          <ControlLabel>Skills</ControlLabel>
          <InputGroup>
            <FormControl type="text" placeholder="Add Skills" />
            <InputGroup.Addon>
              <FontAwesome name="plus-circle" style={{ cursor: "pointer" }} onClick={this.onAdd} />
            </InputGroup.Addon>
          </InputGroup>
        </FormGroup>

        {skillsToAdd.map((skill, index) => {
          return (
            <div style={{ display: "inline-block", marginRight: "15px" }} className="skill" key={index}>{skill}
              <FontAwesome name="minus-circle" style={{ cursor: "pointer" }} onClick={this.onRemove} />
            </div>
          );
        })}

      </div>
    );
  }
}

AddSkills.propTypes = {
  id: PropTypes.string,
  onChange: PropTypes.func
};