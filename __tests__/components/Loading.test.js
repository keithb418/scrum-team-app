import React from 'react';
import { shallow } from 'enzyme';
import Loading from '../../front-end/src/components/Loading';

test('should render the Loading component correctly', () => {
    const wrapper = shallow(<Loading />);
    expect(wrapper).toMatchSnapshot();
});