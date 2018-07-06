import React from 'react';
import { shallow } from 'enzyme';
import teamMemberData from '../fixtures/teamMembers';
import teamData from '../fixtures/teams';
import { TeamColumn } from '../../front-end/src/components/TeamColumn';

let changeTeam, allowDrop, drop, wrapper;
beforeEach(() => {
    changeTeam = jest.fn();
    allowDrop = jest.fn();
    drop = jest.fn();
    wrapper = shallow(
        <TeamColumn
            key={teamData[0]._id}
            id={teamData[0]._id}
            teamName={teamData[0].name}
            teamMembers={teamMemberData} 
            changeTeam={changeTeam} 
        />
    );
});

test('should render TeamColumn component correctly', () => {
    expect(wrapper).toMatchSnapshot();
});


test('should handle drag and drop event', () => {
    let mockEvent = {
        preventDefault: () => { },
    };
    wrapper.find('div.team-column').simulate('dragstart', mockEvent);
    wrapper.find('div.panel-body').simulate('dragover', mockEvent);
    wrapper.find('div.team-column').simulate('dragend', mockEvent);
    wrapper.find('div.team-column').simulate('drop', {
        preventDefault: () => { },
        dataTransfer : { getData: () => teamData[0].name }
    });
    allowDrop();
    drop(); 
    expect(changeTeam).toHaveBeenCalledWith(teamData[0].name, teamData[0]._id);
});
