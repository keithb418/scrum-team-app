import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import API from '../../front-end/src/utils/api';
import teamMemberData from '../fixtures/teamMembers';
import roleData from '../fixtures/roles';
import teamData from '../fixtures/teams';
import { fetchInitialData, fetchProfileData } from '../../front-end/src/actions/shared';
jest.mock('../../front-end/src/utils/api');
let store

beforeEach(() => {
    const middlewares = [thunk];
    const mockStore = configureMockStore(middlewares);
    store = mockStore({ teamMembers: [], teamMember: null });
});

test('should handle initial fetching  action', () => {
    const teams = teamData;
    const teamMembers = teamMemberData;
    const roles = roleData;
    API.getRoles = jest.fn().mockImplementation(() =>
    Promise.resolve({ data: roles }));
    API.getTeams = jest.fn().mockImplementation(() =>
    Promise.resolve({ data: teams }));
    API.getTeamMembers = jest.fn().mockImplementation(() =>
    Promise.resolve({ data: teamMembers }));

    const expectedActions = [
        { type: 'FETCH_DATA' },
        { type: 'FETCH_ROLES', roles },
        { type: 'FETCH_TEAMS', teams },
        { type: 'FETCH_TEAM_MEMBERS', teamMembers },
        { type: 'FETCH_DATA_SUCCESS' }
    ];

    return store.dispatch(fetchInitialData()).then(() => {  
        expect(store.getActions()).toEqual(expectedActions);
    });    
});

test('should handle fetching profile action', () => {
    const teams = teamData;
    const teamMember = teamMemberData[0];
    const roles = roleData;
    API.getTeams = jest.fn().mockImplementation(() =>
    Promise.resolve({ data: teams }));
    API.getTeamMember = jest.fn().mockImplementation(() =>
    Promise.resolve({ data: teamMember }));

    const expectedActions = [
        { type: 'FETCH_DATA' },
        { type: 'FETCH_TEAM_MEMBER', teamMember },
        { type: 'FETCH_TEAMS', teams },
        { type: 'FETCH_DATA_SUCCESS' }
    ];

    return store.dispatch(fetchProfileData(teamMember._id)).then(() => {  
        expect(store.getActions()).toEqual(expectedActions);
    });    
});