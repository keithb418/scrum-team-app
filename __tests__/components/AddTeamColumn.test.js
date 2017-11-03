import AddTeamColumn from "../../front-end/src/components/AddTeamColumn";

import React from "react";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-15";
import { shallow } from "enzyme";
import FontAwesome from "react-fontawesome";

Enzyme.configure({ adapter: new Adapter() });

describe("Add team column component", () => {
  it("should have FontAwesome tag with plus circle name property", () => {
    const wrapper = shallow(
      <AddTeamColumn />
    );
    expect(
      wrapper.containsMatchingElement(
        <FontAwesome name="plus-circle" />)
      ).toBe(true);
  });
});