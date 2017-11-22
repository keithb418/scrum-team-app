import {
  FETCH_TEAM_MEMBERS_REQUEST, FETCH_TEAM_MEMBERS_SUCCESS, FETCH_TEAM_MEMBERS_FAILURE
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