import TeamMember from "../../front-end/src/components/TeamMember";

import React from "react";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-15";
import { shallow } from "enzyme";
import FontAwesome from "react-fontawesome";

Enzyme.configure({ adapter: new Adapter() });

describe("Team member component", () => {
  it("should have FontAwesome tag with user circle name property", () => {
    const wrapper = shallow(
      <TeamMember />
    );
    expect(
      wrapper.containsMatchingElement(
        <FontAwesome name="user-circle" />)
      ).toBe(true);
  });
});