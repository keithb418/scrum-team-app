import React from 'react';
import { shallow } from 'enzyme';
import { AddTeam } from '../../../front-end/src/components/forms/AddTeam';
import teamData from '../../fixtures/teams';

let onSubmit, history, wrapper;
beforeEach(() => {
  onSubmit = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(<AddTeam onSubmit={onSubmit} history={history} />);
});

test('should render AddTeam component correctly', () => {
    expect(wrapper).toMatchSnapshot();
});
  
test('should handle onSubmit', () => {
    wrapper.find('TeamForm').prop('onSubmit')(teamData[1]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(onSubmit).toHaveBeenLastCalledWith(teamData[1]);
});