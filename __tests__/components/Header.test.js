import Header from "../../front-end/src/components/Header";

import React from "react";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-15";
import { shallow } from "enzyme";

Enzyme.configure({ adapter: new Adapter() });

describe("Header component", () => {
  it("should have h1 tag with Scrum Team text", () => {
    const wrapper = shallow(
      <Header />
    );
    expect(wrapper.contains(<h1>Scrum Team</h1>)).toBe(true);
  });
});