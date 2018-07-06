import SelectTeam from "../../../front-end/src/components/forms/SelectTeam";
import React from "react";
import { shallow } from "enzyme";
import teamsData from '../../fixtures/teams';

let onSelect, wrapper
test('should render the SelectTeam component correctly', () => {
    onSelect = jest.fn();
    wrapper = shallow(
      <SelectTeam 
          teams={teamsData} 
          onSelect={onSelect}/>
    );
  expect(wrapper).toMatchSnapshot();
});