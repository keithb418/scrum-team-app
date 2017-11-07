import AddTeam from "../../../front-end/src/components/forms/AddTeam";

import React from "react";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-15";
import { shallow } from "enzyme";
import FontAwesome from "react-fontawesome";

Enzyme.configure({ adapter: new Adapter() });

describe("add team form", () => {
  const wrapper = shallow(
    <AddTeam />
  );

  it("should render a div", () => {
    const divs = wrapper.find('div');
    expect(divs.length).toBeGreaterThan(0);
  });

  it("should render a h3", () => {
    const h3 = wrapper.find('h3');
    expect(h3.length).toBeGreaterThan(0);
  });

  it("should render a Button", () => {
    const Button = wrapper.find('Button');
    expect(Button.length).toEqual(1);
  });
});