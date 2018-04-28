import teamReducer from "../../front-end/src/reducers/teamsReducer";
import teamData from '../fixtures/teams';
let initialState;
beforeEach(() => {
  initialState = {
    teams: teamData,
    team: {
      name: ''
    }
  }
})

test('should set default state', () => {
  const init = {
    team: {
      name: ''
    },
    teams: []
  }
  const state = teamReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual(init);
});

test('should add a team member', () => {
  const team =  {
    _id: "123abc",
    name: "Team Awesome", 
  }
  const action = { type: 'CREATE_TEAM', team }
  const state = teamReducer(initialState, action);
  expect(state).toEqual({
    teams: [...teamData, team],
    team: {
      name: ''
    }
  });
});

test('should remove item with the same id argument', () => {
  const action = { type: 'DELETE_TEAM', id: teamData[1]._id }
  const state = teamReducer(initialState, action);
  expect(state).toEqual({
    teams: [teamData[0]],
    team: {
      name: ''
    }
  });
});

test('should not remove an item if id is not found', () => {
  const action = { type: 'DELETE_TEAM', id: '-1' }
  const state = teamReducer(initialState, action);
  expect(state).toEqual(initialState);
});

test('should set teams', () => {
  const teams = teamData;
  const action = { type: 'FETCH_TEAMS', teams: { teams } };
  const state = teamReducer(initialState, action);
  expect(state).toEqual(initialState);
});

test('should set team', () => {
  const team = teamData[1];
  const action = { type: 'FETCH_TEAM', team };
  const state = teamReducer(initialState, action);
  expect(state).toEqual({
    teams: teamData,
    team 
  });
});

test('should update a team member', () => {
  const team =  {
    _id: "1",
    name: "Updated Team", 
  }
  const action = { type: 'UPDATE_TEAM', team };
  const state = teamReducer(initialState, action);
  expect(state.teams[0].name).toEqual(team.name);
});