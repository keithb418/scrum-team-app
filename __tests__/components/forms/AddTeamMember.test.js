import React from 'react';
import { shallow } from 'enzyme';
import { AddTeamMember } from '../../../front-end/src/components/forms/AddTeamMember';
import teamMemberData from '../../fixtures/teamMembers';
import teamData from '../../fixtures/teams';
import roleData from '../../fixtures/roles';

let onSubmit, history, wrapper;
beforeEach(() => {
    onSubmit = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(
        <AddTeamMember 
            onSubmit={onSubmit} 
            history={history} 
            teams={teamData}
            roles={roleData}/>
    );
});

test('should render AddTeamMember component correctly', () => {
    expect(wrapper).toMatchSnapshot();
});
  
test('should handle onSubmit', () => {
    wrapper.find('TeamMemberForm').prop('onSubmit')(teamMemberData[1]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(onSubmit).toHaveBeenLastCalledWith(teamMemberData[1]);
});