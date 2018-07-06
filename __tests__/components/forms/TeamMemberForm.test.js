import React from 'react';
import { shallow } from 'enzyme';
import TeamMemberForm from '../../../front-end/src/components/forms/TeamMemberForm';
import teamMembersData from '../../fixtures/teamMembers';
import teamsData from '../../fixtures/teams';
import rolesData from '../../fixtures/roles';

test('should render TeamMemberForm correctly', () => {
    const wrapper = shallow(
        <TeamMemberForm
            title="Test Team Form"
            teamMember={teamMembersData[0]}
            teams={teamsData}
            roles={rolesData}/>
    );
    expect(wrapper).toMatchSnapshot()
});

test('should render invalid TeamMemberForm correctly', () => {
    const getValidationState = jest.fn().mockImplementation(() => "error");
    const wrapper = shallow(<TeamMemberForm/>);
    wrapper.find('Form').simulate('submit', {
        preventDefault: () => { }
    });
    expect(wrapper.state('isDisabled')).toBe(true);
    expect(wrapper.find('Button').at(0).props().disabled).toBe(true);
    expect(wrapper).toMatchSnapshot();
});

test('should render invalid TeamMemberForm correctly', () => {
    const wrapper = shallow(<TeamMemberForm/>);
    const name = "name";
    const value = "Team Member 1";
    wrapper.find('FormControl').at(0).simulate('change', {
        target: { name, value }
    });
    expect(wrapper.state('name')).toBe(value);
});

test('should render invalid TeamMemberForm correctly', () => {
    const wrapper = shallow(<TeamMemberForm/>);
    const name = "email";
    const value = "test123@mail.com";
    wrapper.find('FormControl').at(1).simulate('change', {
        target: { name, value }
    });
    expect(wrapper.state('email')).toBe(value);
});

test('should render invalid TeamMemberForm correctly', () => {
    const wrapper = shallow(<TeamMemberForm/>);
    const name = "teamLead";
    const checked = false;
    const value = false
    wrapper.find('Checkbox').simulate('change', {
        target: { name, checked, value }
    });
    expect(wrapper.state('teamLead')).toBe(checked);
});

test('should render invalid TeamMemberForm correctly', () => {
    const wrapper = shallow(<TeamMemberForm/>);
    const name = "experience";
    const value = "Senior Level";
    wrapper.find('Radio').at(0).simulate('change', {
        target: { name, value }
    });
    expect(wrapper.state('experience')).toBe(value);
});

test('should render invalid TeamMemberForm correctly', () => {
    const wrapper = shallow(<TeamMemberForm/>);
    const name = "experience"
    const value = "Mid Level";
    wrapper.find('Radio').at(1).simulate('change', {
        target: { name, value }
    });
    expect(wrapper.state('experience')).toBe(value);
});

test('should render invalid TeamMemberForm correctly', () => {
    const wrapper = shallow(<TeamMemberForm/>);
    const name = "experience"
    const value = "Junior Level";
    wrapper.find('Radio').at(2).simulate('change', {
        target: { name, value }
    });
    expect(wrapper.state('experience')).toBe(value);
});

test('should render invalid TeamMemberForm correctly', () => {
    const wrapper = shallow(<TeamMemberForm/>);
    const name = "experience"
    const value = "Level not applicable";
    wrapper.find('Radio').at(3).simulate('change', {
        target: { name, value }
    });
    expect(wrapper.state('experience')).toBe(value);
});

test('should set select team', () => {
    const value = teamMembersData[0].team;
    const wrapper = shallow(<TeamMemberForm teamMember={teamMembersData[0]}/>);
    expect(wrapper.state('team')).toBe(value);
});

test('should set select roles', () => {
    const value = teamMembersData[2].role;
    const wrapper = shallow(<TeamMemberForm teamMember={teamMembersData[2]}/>);
    expect(wrapper.state('role')).toBe(value);
});

test('should call onSubmit prop for valid form submission', () => {
    const onSubmit = jest.fn();
    const getValidationState = jest.fn().mockImplementation(() => "success");
    const wrapper = shallow(
        <TeamMemberForm
            title="Test Team Form"
            teamMember={teamMembersData[0]}
            onSubmit={onSubmit}/>
    );
    wrapper.find('Form').simulate('submit', {
        preventDefault: () => { }
    });
    expect(wrapper.state('isDisabled')).toBe(false);
    expect(wrapper.find('Button').at(0).props().disabled).toBe(false);
    expect(onSubmit).toHaveBeenLastCalledWith({
        name: teamMembersData[0].name,
        email: teamMembersData[0].email,
        team: teamMembersData[0].team,
        teamLead: teamMembersData[0].teamLead,
        experience: teamMembersData[0].experience,
        role: teamMembersData[0].role,
        skills: teamMembersData[0].skills,
    });
});


