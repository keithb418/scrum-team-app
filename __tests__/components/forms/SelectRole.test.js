import SelectRole from "../../../front-end/src/components/forms/SelectRole";

import React from "react";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-15";
import { shallow } from "enzyme";
import FontAwesome from "react-fontawesome";

Enzyme.configure({ adapter: new Adapter() });

describe("select role form", () => {
  const wrapper = shallow(
    <SelectRole />
  );

  it("should render a FormGroup", () => {
    const FormGroup = wrapper.find('FormGroup');
    expect(FormGroup.length).toBeGreaterThan(0);
  });
  
  it("should have a placeholder property with the text 'Select Role", () => {
    const FormControl = wrapper.find('FormControl');    
    expect(FormControl.props().placeholder).toBe("Select Role");
  });
});
