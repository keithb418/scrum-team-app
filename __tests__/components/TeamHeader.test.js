import React from 'react';
import { shallow } from 'enzyme';
import { TeamHeader } from "../../front-end/src/components/TeamHeader";
import teamMembersData from '../fixtures/teamMembers';
import teamsData from '../fixtures/teams';
let wrapper, button, deleteTeam, truncateString;

beforeEach(() => {
    truncateString = jest.fn();
    deleteTeam = jest.fn();
    wrapper = shallow(       
        <TeamHeader 
          teamMembers={teamMembersData}
          id={teamsData[0]._id}
          deleteTeam={deleteTeam}
          teamName={teamsData[0].name}/>
    );
    button = wrapper.find('Button').at(2);
});

test('should render the TeamHeader component correctly', () => {
    expect(wrapper).toMatchSnapshot();
    expect(button.props().disabled).toBe(true);
});

test('should enable delete button if team members are empty', () => {
    wrapper = shallow(
        <TeamHeader 
        teamMembers={[]}
        deleteTeam={deleteTeam}
        id={teamsData[0]._id}
        teamName={teamsData[0].name}/>
    );
    button = wrapper.find('Button').at(2);
    expect(button.props().disabled).toBe(false);
});

test('should handle deleting Team', () => {
  button.simulate('click')
  expect(deleteTeam).toHaveBeenCalledWith(teamsData[0]._id);
});

