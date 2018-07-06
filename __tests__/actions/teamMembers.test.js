import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import API from '../../front-end/src/utils/api';
import data from '../fixtures/teamMembers';
import { 
    fetchTeamMembers,
    fetchTeamMember,  
    addTeamMember, 
    handleFetchTeamMember, 
    handleCreateTeamMember, 
    handleUpdateTeamMember,
    handleDeleteTeamMember,
    handleChangeTeam 
} from '../../front-end/src/actions/teamMembers';
jest.mock('../../front-end/src/utils/api');
let store

beforeEach(() => {
    const middlewares = [thunk];
    const mockStore = configureMockStore(middlewares);
    store = mockStore({ teamMembers: [], teamMember: null });
});

test('should setup teamMembers fetchTeamMembers action', () => {
    const action = fetchTeamMembers(data);
    expect(action).toEqual({
        type: 'FETCH_TEAM_MEMBERS', 
        teamMembers: data
    });
});

test('should setup teamMembers fetchTeamMember action', () => {
    const action = fetchTeamMember(data[0]);
    expect(action).toEqual({
        type: 'FETCH_TEAM_MEMBER', 
        teamMember: data[0]
    });
});

test('should setup teamMembers addTeamMember action', () => {
    const teamMember =  {
        name: "Marc", 
        email: "mtest@mail.com", 
        team: "1abc", 
        teamLead: false, 
        role: "Fullstack Developer", 
        skills: ["react"], 
        experience: "4 years"
    }
    const action = addTeamMember(teamMember);
    expect(action).toEqual({
        type: 'CREATE_TEAM_MEMBER', 
        teamMember: {
            ...teamMember,
            id: expect.any(String)
        }
    });
});

test('should handle fetching team member action', () => {
    const teamMember = data[0];
    API.getTeamMember = jest.fn().mockImplementation(() =>
    Promise.resolve({ data: teamMember }));

    const expectedActions = [
        { type: 'FETCH_DATA' },
        { type: 'FETCH_TEAM_MEMBER', teamMember },
        { type: 'FETCH_DATA_SUCCESS' }
    ];

    return store.dispatch(handleFetchTeamMember(0)).then(() => {  
        expect(store.getActions()).toEqual(expectedActions);
    });    
});

test('should handle creating team member action', () => {
    const teamMember =  {
        name: "Marc", 
        email: "mtest@mail.com", 
        team: "1abc", 
        teamLead: false, 
        role: "Fullstack Developer", 
        skills: ["react"], 
        experience: "4 years"
    }
    API.createTeamMember = jest.fn().mockImplementation(() =>
    Promise.resolve({ data: teamMember }));

    const expectedActions = [
        { type: 'CREATE_TEAM_MEMBER', teamMember: { id: expect.any(String), ...teamMember} }
    ];
   
    store.dispatch(handleCreateTeamMember(teamMember)).then(() => {  
        expect(store.getActions()).toEqual(expectedActions);
    });    
   
});

test('should handle deleting team member action', () => {
    const deletedTeamMember = data[1];
    API.deleteTeamMembers = jest.fn().mockImplementation(() =>
    Promise.resolve({ data: deletedTeamMember }));

    const expectedActions = [
        { type: 'DELETE_TEAM_MEMBER', id: 1 }
    ];

    return store.dispatch(handleDeleteTeamMember(1)).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
    });    
});

test('should handle updating team member action', () => {
    const updatedTeamMember = data[2];
    API.updateTeamMembers = jest.fn().mockImplementation(() =>
    Promise.resolve({
        status: 200,
        response: {data: updatedTeamMember},
    }));
   
    const expectedActions = [
        { type: 'UPDATE_TEAM_MEMBER', teamMember: updatedTeamMember }
    ];

    return store.dispatch(handleUpdateTeamMember(updatedTeamMember)).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
    });    
});

test('should handle updating team member action', () => {
    const updatedTeamMember ={ _id: data[1].id, team: 'abc'}
    API.updateTeamMembers = jest.fn().mockImplementation(() =>
    Promise.resolve({
        status: 200,
        response: {data: updatedTeamMember},
    }));
   
    const expectedActions = [
        { type: 'CHANGE_TEAM', result: updatedTeamMember }
    ];

    return store.dispatch(handleChangeTeam(updatedTeamMember._id, updatedTeamMember.team)).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
    });    
});