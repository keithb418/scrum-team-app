import {
  FETCH_TEAMS_REQUEST, FETCH_TEAMS_SUCCESS, FETCH_TEAMS_FAILURE
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