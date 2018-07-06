import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../front-end/src/components/Header';

test('should render the Header component correctly', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
});