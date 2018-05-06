import React from "react";
import { shallow } from "enzyme";
import AddSkills from "../../../front-end/src/components/forms/AddSkills";
let skills, wrapper, resetInput, onChange;

beforeEach(() => {
  skills = ["react", "redux", "es6", "backbone"]
  onChange = jest.fn();
  resetInput = jest.fn();
  wrapper = shallow(
    <AddSkills
        id="add-skills"
        skills={skills}
        onChange={onChange}/>
  );
});

test('should render AddSkills component correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('handles changine input for skill', () => {
  wrapper.find('FormControl').simulate('change', {
    target: {
      name: 'skill',
      value: 'javascript'
    }
  });
  expect(wrapper.state('skill')).toEqual('javascript');
});

test('handle adding skills', () => {
  wrapper.setState({ skill: 'javascript' });
  wrapper.find('FontAwesome').at(0).simulate('click');
  expect(wrapper.state('skills')).toEqual([...skills, 'javascript']);
  expect(onChange).toHaveBeenCalledWith(wrapper.state('skills'));
});

test('handle removing skills', () => {
  let node = { innerText: 'backbone' };
  wrapper.find('FontAwesome').at(1).simulate('click', {
    target: { parentNode: node }
  });
  expect(wrapper.state('skills')).toEqual([skills[0], skills[1], skills[2]]);
  expect(onChange).toHaveBeenCalledWith(wrapper.state('skills'));
});
