import React from "react";
import { shallow } from "enzyme";
import SelectRole from "../../../front-end/src/components/forms/SelectRole";
import rolesData from '../../fixtures/roles';

let onSelect, wrapper
test('should render the SelectRole component correctly', () => {
    onSelect = jest.fn();
    wrapper = shallow(
      <SelectRole 
          roles={rolesData} 
          onSelect={onSelect}/>
    );
  expect(wrapper).toMatchSnapshot();
});
