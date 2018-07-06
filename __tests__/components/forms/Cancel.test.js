import React from 'react';
import { shallow } from 'enzyme';
import CancelButton from '../../../front-end/src/components/forms/CancelButton';

test('should render the Header component correctly', () => {
    const wrapper = shallow(<CancelButton />);
    expect(wrapper).toMatchSnapshot();
});