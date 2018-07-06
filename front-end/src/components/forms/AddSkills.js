import React, { Component } from "react";
import { FormGroup, FormControl, InputGroup, ControlLabel } from "react-bootstrap";
import FontAwesome from "react-fontawesome";
import PropTypes from "prop-types";

export default class AddSkills extends Component {
  constructor (props) {
    super(props);
    this.state = { 
      skills: this.props.skills || [],
      skill: '' 
    };
  }

  onAdd = () => { 
    this.setState(({skills, skill}) => ({ skills: skills.concat(skill) }));
    this.props.onChange(this.state.skills);
    this.resetInput();
  }

  onRemove = (e) => {
    let skillToRemove = e.target.parentNode.innerText;
    this.setState(({skills}) => ({ skills: skills.filter(skill => skill != skillToRemove) }));
    this.props.onChange(this.state.skills);
  }

  getInput = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    this.setState({
      [name]: value
    });
  }

  resetInput = () => {
    this.setState(() => ({ skill: '' }));
  }

  render () {
    let skillsToAdd = this.state.skills;
    return (
      <div className="add-skills">
        <FormGroup controlId={this.props.id} style={{ width: "200px" }}>
          <ControlLabel>Skills</ControlLabel>
          <InputGroup>
            <FormControl name="skill" type="text" placeholder="Add Skills" value={this.state.skill} onChange={this.getInput}/>
            <InputGroup.Addon>
              <FontAwesome name="plus-circle" className="left-spacer add-skills-icon" style={{ cursor: "pointer" }} onClick={this.onAdd} />
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