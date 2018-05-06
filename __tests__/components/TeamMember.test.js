import React from "react";
import { TeamMember } from "../../front-end/src/components/TeamMember";
import teamMembersData from '../fixtures/teamMembers';
import { shallow } from "enzyme";

let wrapper, handleDeleteTeamMember, button;
beforeEach(() => {
  handleDeleteTeamMember = jest.fn();
  wrapper = shallow(       
    <TeamMember 
      handleDeleteTeamMember={handleDeleteTeamMember}
      teamLead={teamMembersData[1].teamLead}
      id={teamMembersData[1].id}
      name={teamMembersData[1].name}
      role={teamMembersData[1].role}/>
  );
  button = wrapper.find('button');
});

test('should render the TeamMember component correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('the button should be draggable', () => {
  expect(button.props().onDragStart.length).toBe(1);
  expect(button.props().draggable).toBe("true");
});

test('should handle deleting team member', () => {
   wrapper.find('FontAwesome').at(0).simulate('click');
   expect(handleDeleteTeamMember).toHaveBeenCalledWith(teamMembersData[1].id);
});

