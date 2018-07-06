import React from 'react';
import { shallow } from 'enzyme';
import teamMemberData from '../fixtures/teamMembers';
import Skills from '../../front-end/src/components/Skills';

test('should render the Skills component correctly', () => {
    const wrapper = shallow(<Skills member={teamMemberData[1]} />);
    expect(wrapper).toMatchSnapshot();
});

