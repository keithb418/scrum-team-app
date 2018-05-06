import React from 'react';
import { shallow } from 'enzyme';
import { EditTeam } from '../../../front-end/src/components/forms/EditTeam';
import teamData from '../../fixtures/teams';

let editTeam, fetchTeam, history, wrapper, path;

beforeEach(() => {
    path = {
        params: {
            id: teamData[1]._id
        }
    }
    editTeam = jest.fn();
    fetchTeam = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(
        <EditTeam
            match={path}
            editTeam={editTeam}
            fetchTeam={fetchTeam}
            history={history}
            team={teamData[1]}/>
    );
});

test('should render EditTeam correctly', () => {
    expect(wrapper).toMatchSnapshot()
    expect(fetchTeam).toHaveBeenCalledWith(teamData[1]._id);
});

test('should handle editTeam', () => {
    wrapper.find('TeamForm').prop('onSubmit')(teamData[1]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(editTeam).toHaveBeenLastCalledWith(teamData[1]);
});

