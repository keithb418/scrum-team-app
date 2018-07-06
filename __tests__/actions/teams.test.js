import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import API from '../../front-end/src/utils/api';
import { fetchTeams, fetchTeam, handleFetchTeam, handleCreateTeam, handleDeleteTeam, handleUpdateTeam } from '../../front-end/src/actions/teams';
import teamData from '../fixtures/teams';
jest.mock('../../front-end/src/utils/api');
let store

beforeEach(() => {
    const middlewares = [thunk];
    const mockStore = configureMockStore(middlewares);
    store = mockStore({ teams: [], team: {} });
});

test('should fetch teams action', () => {
    const action = fetchTeams(teamData)
    expect(action).toEqual({
        type: 'FETCH_TEAMS',
        teams: teamData
    });
});

test('should fetch team action', () => {
    const team = teamData[0]
    const action = fetchTeam(team)
    expect(action).toEqual({
        type: 'FETCH_TEAM',
        team: team
    });
});

test('should handle fetching team action', () => {
    const team = teamData[0];
    API.getTeam = jest.fn().mockImplementation(() =>
    Promise.resolve({ data: team }));

    const expectedActions = [
        { type: 'FETCH_DATA' },
        { type: 'FETCH_TEAM', team },
        { type: 'FETCH_DATA_SUCCESS' }
    ];

    return store.dispatch(handleFetchTeam('1abc')).then(() => {  
        expect(store.getActions()).toEqual(expectedActions);
    });    
});

test('should handle creating team action', () => {
    const newTeam = {name: "New Team" };
    API.createTeams = jest.fn().mockImplementation(() =>
    Promise.resolve({ data: newTeam }));

    const expectedActions = [
        { type: 'CREATE_TEAM', team: { _id: expect.any(String), ...newTeam} }
    ];
   
    store.dispatch(handleCreateTeam({name: "New Team" })).then(() => {  
        expect(store.getActions()).toEqual(expectedActions);
    });    
   
});

test('should handle deleting team action', () => {
    const deletedTeam = {id: 1, name: "Deleted Team" };
    API.deleteTeam = jest.fn().mockImplementation(() =>
    Promise.resolve({ data: deletedTeam }));

    const expectedActions = [
        { type: 'DELETE_TEAM', id: 1 }
    ];

    return store.dispatch(handleDeleteTeam(1)).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
    });    
});

test('should handle updating team action', () => {
    const updatedTeam = {id: 1, name: "Updated Team" };
    API.updateTeams = jest.fn().mockImplementation(() =>
    Promise.resolve({
        status: 200,
        response: {data: updatedTeam},
    }));
   
    const expectedActions = [
        { type: 'UPDATE_TEAM', team: { id: 1, name: "Updated Team" } }
    ];

    return store.dispatch(handleUpdateTeam(updatedTeam)).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
    });    
});

