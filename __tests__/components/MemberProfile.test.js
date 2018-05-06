import React from 'react';
import { shallow } from 'enzyme';
import teamMemberData from '../fixtures/teamMembers';
import teamsData from '../fixtures/teams';
import { MemberProfile } from '../../front-end/src/components/MemberProfile';
let fetchProfileData;

test('should render the MemberProfile component correctly', () => {
    fetchProfileData = jest.fn();
    const path = {
        params: {
            id: teamMemberData[1]._id
        }
    }
    const wrapper = shallow(
    <MemberProfile 
        fetchProfileData={fetchProfileData}
        match={path}
        team={teamsData[1]} 
        teamMember={teamMemberData[1]} 
    />
);
    expect(wrapper).toMatchSnapshot();
    expect(fetchProfileData).toHaveBeenCalledWith(teamMemberData[1]._id);
});

