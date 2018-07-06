import React from 'react';
import { shallow } from 'enzyme';
import teamMembersData from '../fixtures/teamMembers';
import teamsData from '../fixtures/teams';
import rolesData from '../fixtures/roles';
import { TeamColumns } from '../../front-end/src/components/TeamColumns';
let fetchInitialData
test('should render the TeamColumns component correctly', () => {
    fetchInitialData = jest.fn();
    const wrapper = shallow(
        <TeamColumns 
            fetchInitialData={fetchInitialData}
            teams={teamsData} 
            teamMembers={teamMembersData}
            roles={rolesData}/>
    );
    expect(wrapper).toMatchSnapshot();
    expect(fetchInitialData).toHaveBeenCalled();
});