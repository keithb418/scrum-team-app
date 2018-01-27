import {
  FETCH_TEAMS_REQUEST, FETCH_TEAMS_SUCCESS, FETCH_TEAMS_FAILURE,
  CREATE_TEAM_REQUEST, CREATE_TEAM_SUCCESS, CREATE_TEAM_FAILURE,
  DELETE_TEAM_REQUEST, DELETE_TEAM_SUCCESS, DELETE_TEAM_FAILURE
} from '../actionTypes'

import { thunkCreator } from './utils'

export const fetchTeams = () => thunkCreator({
  types: [
    FETCH_TEAMS_REQUEST,
    FETCH_TEAMS_SUCCESS,
    FETCH_TEAMS_FAILURE
  ],

  promise: fetch('/api/teams')
             .then(response => response.json())
});

const _createTeam = (name) => thunkCreator({
  types: [
    CREATE_TEAM_REQUEST,
    CREATE_TEAM_SUCCESS,
    CREATE_TEAM_FAILURE
  ],

  promise: fetch('/api/teams', {
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

const _deleteTeam = (id) => thunkCreator({
  types: [
    DELETE_TEAM_REQUEST,
    DELETE_TEAM_SUCCESS,
    DELETE_TEAM_FAILURE
  ],

  promise: fetch(`/api/teams/${id}`, {
    method: 'DELETE',
    headers: {
      'Accept': 'text/html',
      'Content-Type': 'text/html'
    },
    body: JSON.stringify({id})
  })
  .then(response => response.json())
});

export const deleteTeam = (id) => (dispatch) =>
  _deleteTeam(id)(dispatch)
    .catch(err =>
      console.log('Could not delete team:', err.message)
    );