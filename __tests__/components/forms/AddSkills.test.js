import AddSkills from "../../../front-end/src/components/forms/AddSkills";

import React from "react";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-15";
import { shallow } from "enzyme";
import FontAwesome from "react-fontawesome";

Enzyme.configure({ adapter: new Adapter() });

describe("add skills form", () => {
  const wrapper = shallow(
    <AddSkills />
  );

  it("should render a div", () => {
    const divs = wrapper.find('div');
    expect(divs.length).toBeGreaterThan(0);
  });

  it("should have FontAwesome tag with plus circle name property", () => {
    expect(
      wrapper.containsMatchingElement(
        <FontAwesome name="plus-circle" />)
      ).toBe(true);
  });

  it("should have a placeholder property with the text 'Add Skills' ", () => {
    const FormControl = wrapper.find('FormControl');    
    expect(FormControl.props().placeholder).toBe("Add Skills");
  });
  
  it("should render a InputGroup", () => {
    const InputGroup = wrapper.find('InputGroup');
    expect(InputGroup.length).toBeGreaterThan(0);
  });
});

