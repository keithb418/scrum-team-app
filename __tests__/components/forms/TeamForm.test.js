import React from 'react';
import { shallow } from 'enzyme';
import TeamForm from '../../../front-end/src/components/forms/TeamForm';
import teamData from '../../fixtures/teams';

test('should render TeamForm correctly', () => {
    const wrapper = shallow(
        <TeamForm
            title="Test Team Form"
            team={teamData[0]}/>
    );
    expect(wrapper).toMatchSnapshot()
});

test('should render invalid TeamForm correctly', () => {
    const getValidationState = jest.fn().mockImplementation(() => "error");
    const wrapper = shallow(<TeamForm/>);
    wrapper.find('Form').simulate('submit', {
        preventDefault: () => { }
    });
    expect(wrapper.state('isDisabled')).toBe(true);
    expect(wrapper.find('Button').props().disabled).toBe(true);
    expect(wrapper).toMatchSnapshot();
});

test('should set name input change', () => {
    const wrapper = shallow(<TeamForm/>);
    const name = "name"
    const value = "new Team";
    wrapper.find('FormControl').simulate('change', {
        target: { name, value }
    });
    expect(wrapper.state('name')).toBe(value);
});

test('should call onSubmit prop for valid form submission', () => {
    const onSubmit = jest.fn();
    const getValidationState = jest.fn().mockImplementation(() => "success");
    const wrapper = shallow(
        <TeamForm
            title="Test Team Form"
            team={teamData[0]}
            onSubmit={onSubmit}/>
    );
    wrapper.find('Form').simulate('submit', {
        preventDefault: () => { }
    });
    expect(wrapper.state('isDisabled')).toBe(false);
    expect(wrapper.find('Button').props().disabled).toBe(false);
    expect(onSubmit).toHaveBeenLastCalledWith({
        name: teamData[0].name,
    });
});