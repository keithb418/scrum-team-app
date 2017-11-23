import {
  FETCH_TEAM_MEMBERS_REQUEST, FETCH_TEAM_MEMBERS_SUCCESS, FETCH_TEAM_MEMBERS_FAILURE,
  CREATE_TEAM_MEMBER_REQUEST, CREATE_TEAM_MEMBER_SUCCESS, CREATE_TEAM_MEMBER_FAILURE
} from '../actionTypes'

import { thunkCreator } from './utils'

export const fetchTeamMembers = () => thunkCreator({
  types: [
    FETCH_TEAM_MEMBERS_REQUEST,
    FETCH_TEAM_MEMBERS_SUCCESS,
    FETCH_TEAM_MEMBERS_FAILURE
  ],

  promise: fetch('http://localhost:3000/api/teamMembers')
             .then(response => response.json())
});

const _createTeamMember = (teamMember) => thunkCreator({
  types: [
    CREATE_TEAM_MEMBER_REQUEST,
    CREATE_TEAM_MEMBER_SUCCESS,
    CREATE_TEAM_MEMBER_FAILURE
  ],

  promise: fetch('http://localhost:3000/api/teamMembers', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      ...teamMember
    })
  })
  .then(response => response.json())
});

export const createTeamMember = (teamMember) => (dispatch) =>
  _createTeamMember(teamMember)(dispatch)
    .catch(err =>
      console.log('Could not create a team member:', err.message)
    );