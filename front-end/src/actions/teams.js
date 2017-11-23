import {
  FETCH_TEAMS_REQUEST, FETCH_TEAMS_SUCCESS, FETCH_TEAMS_FAILURE,
  CREATE_TEAM_REQUEST, CREATE_TEAM_SUCCESS, CREATE_TEAM_FAILURE
} from '../actionTypes'

import { thunkCreator } from './utils'

export const fetchTeams = () => thunkCreator({
  types: [
    FETCH_TEAMS_REQUEST,
    FETCH_TEAMS_SUCCESS,
    FETCH_TEAMS_FAILURE
  ],

  promise: fetch('http://localhost:3000/api/teams')
             .then(response => response.json())
});

const _createTeam = (name) => thunkCreator({
  types: [
    CREATE_TEAM_REQUEST,
    CREATE_TEAM_SUCCESS,
    CREATE_TEAM_FAILURE
  ],

  promise: fetch('http://localhost:3000/api/teams', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json' 
    },
    body: JSON.stringify({
      ...name
    })
  })
  .then(response => response.json())
});

export const createTeam = (name) => (dispatch) =>
  _createTeam(name)(dispatch)
    .catch(err =>
      console.log('Could not create a team:', err.message)
    );