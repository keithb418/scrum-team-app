import React from "react";
import { shallow } from "enzyme";
import AddTeamColumn from "../../front-end/src/components/AddTeamColumn";

test('should render the AddTeamColumn component correctly', () => {
  const wrapper = shallow(<AddTeamColumn />);
  expect(wrapper).toMatchSnapshot();
});

