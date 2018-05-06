import React from 'react';
import { shallow } from 'enzyme';
import Profile from '../../front-end/src/components/Profile';
import teamMemberData from '../fixtures/teamMembers';

test('should render the Profile component correctly', () => {
    const wrapper = shallow(<Profile member={teamMemberData[0]}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should render the Profile component with an empty data', () => {
    const wrapper = shallow(<Profile member={{}}/>);
    expect(wrapper).toMatchSnapshot();
});