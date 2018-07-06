import teamMembersReducer from "../../front-end/src/reducers/teamMembersReducer";
import teamMembersData from '../fixtures/teamMembers';
let initialState;
beforeEach(() => {
  initialState = {
    teamMembers: teamMembersData,
    teamMember: null
  }
})

test('should set default state', () => {
  const init = {
    teamMembers: [],
    teamMember: null
  }
  const state = teamMembersReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual(init);
});

test('should add a team member', () => {
  const teamMember =  {
    id: "123abc",
    name: "Marc", 
    email: "mtest@mail.com", 
    team: "1abc", 
    teamLead: false, 
    role: "Fullstack Developer", 
    skills: ["react"], 
    experience: "4 years"
  }
  const action = { type: 'CREATE_TEAM_MEMBER', teamMember }
  const state = teamMembersReducer(initialState, action);
  expect(state).toEqual({
    teamMembers: [...teamMembersData, teamMember],
    teamMember: null
  });
});

test('should remove item with the same id argument', () => {
  const action = { type: 'DELETE_TEAM_MEMBER', id: teamMembersData[1]._id }
  const state = teamMembersReducer(initialState, action);
  expect(state).toEqual({
    teamMembers: [teamMembersData[0], teamMembersData[2]],
    teamMember: null
  });
});

test('should not remove an item if id is not found', () => {
  const action = { type: 'DELETE_TEAM_MEMBER', id: '-1' }
  const state = teamMembersReducer(initialState, action);
  expect(state).toEqual(initialState);
});

test('should update team ', () => {
  const resultItem = { _id: teamMembersData[0]._id, team: 'tacos' }
  const action = { type: 'CHANGE_TEAM', result: resultItem }
  const state = teamMembersReducer(initialState, action);
  expect(state.teamMembers[0].team).toEqual(resultItem.team);
});

test('should set team members', () => {
  const teamMembers = teamMembersData;
  const action = { type: 'FETCH_TEAM_MEMBERS', teamMembers: { teamMembers } };
  const state = teamMembersReducer(initialState, action);
  expect(state).toEqual(initialState);
});

test('should set team member', () => {
  const teamMember = teamMembersData[2];
  const action = { type: 'FETCH_TEAM_MEMBER', teamMember};
  const state = teamMembersReducer(initialState, action);
  expect(state).toEqual({
    teamMembers: teamMembersData,
    teamMember: teamMember
  });
});

test('should update a team member', () => {
  const teamMember =  {
    _id: "1",
    name: "Marc", 
    email: "mtest@mail.com", 
    team: "1abc", 
    teamLead: true, 
    role: "Fullstack Developer", 
    skills: ["react"], 
    experience: "5 years"
  }
  const action = { type: 'UPDATE_TEAM_MEMBER', teamMember };
  const state = teamMembersReducer(initialState, action);
  expect(state.teamMembers[0].teamLead).toEqual(teamMember.teamLead);
  expect(state.teamMembers[0].experience).toEqual(teamMember.experience);
});
