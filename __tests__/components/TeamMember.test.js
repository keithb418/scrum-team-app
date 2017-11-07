import TeamMember from "../../front-end/src/components/TeamMember";

import React from "react";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-15";
import { shallow } from "enzyme";
import FontAwesome from "react-fontawesome";

Enzyme.configure({ adapter: new Adapter() });

describe("Team member component", () => {
  const wrapper = shallow(
    <TeamMember />
  );

  describe("Button element", () => {
    const button = wrapper.find('button');
    
    it("should render a button", () => {
      expect(button.length).toEqual(1);
    });
    it("should be draggable button", () => {
      expect(button.props().draggable).toBe("true");
    });
    it("should have onDragStart property", () => {
      expect(button.props().onDragStart.length).toBe(1);
    });
  })

  it("should render a Row", () => {
    const Row = wrapper.find('Row');
    expect(Row.length).toEqual(1);
  });
  it("should render two Columns", () => {
    const Col = wrapper.find('Col');
    expect(Col.length).toEqual(2);
  });
  it("should have FontAwesome tag with user circle name property", () => {
    expect(
      wrapper.containsMatchingElement(
        <FontAwesome name="user-circle" />)
      ).toBe(true);
  });
  it("should have FontAwesome tag with edit property", () => {
    expect(
      wrapper.containsMatchingElement(
        <FontAwesome name="edit" />)
      ).toBe(true);
  });
});

