import AddTeamColumn from "../../front-end/src/components/AddTeamColumn";

import React from "react";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-15";
import { shallow } from "enzyme";
import FontAwesome from "react-fontawesome";

Enzyme.configure({ adapter: new Adapter() });

describe("add team column component", () => {
  const wrapper = shallow(
    <AddTeamColumn />
  );

  it("should render a Button", () => {
    const Button = wrapper.find('Button');
    expect(Button.length).toEqual(1);
  });

  it("should have FontAwesome tag with plus circle name property", () => {
    expect(
      wrapper.containsMatchingElement(
        <FontAwesome name="plus-circle" />)
      ).toBe(true);
  });
});