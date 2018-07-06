import React from 'react';
import { shallow } from 'enzyme';
import { EditTeamMember } from '../../../front-end/src/components/forms/EditTeamMember';
import teamMemberData from '../../fixtures/teamMembers';

let editTeamMember, history, wrapper, path, fetchProfileData;

beforeEach(() => {
    path = {
        params: {
            id: teamMemberData[1]._id
        }
    }
    editTeamMember = jest.fn();
    fetchProfileData = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(
        <EditTeamMember
            match={path}
            editTeamMember={editTeamMember}
            fetchProfileData={fetchProfileData}
            history={history}
            teamMember={teamMemberData[1]}/>
    );
});

test('should render EditTeamMember correctly', () => {
    expect(wrapper).toMatchSnapshot()
    expect(fetchProfileData).toHaveBeenCalledWith(teamMemberData[1]._id);
});

test('should handle editTeam', () => {
    wrapper.find('TeamMemberForm').prop('onSubmit')(teamMemberData[1]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(editTeamMember).toHaveBeenLastCalledWith(teamMemberData[1]);
});