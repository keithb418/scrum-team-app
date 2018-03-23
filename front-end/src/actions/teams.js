import * as types from '../actionTypes'
import API from '../utils/api';
import uuid from 'uuid';


export const fetchTeams = (teams) => ({
    type: types.FETCH_TEAMS,
    teams
});

// const _createTeam = (name) => thunkCreator({
//   types: [
//     CREATE_TEAM_REQUEST,
//     CREATE_TEAM_SUCCESS,
//     CREATE_TEAM_FAILURE
//   ],

//   promise: fetch('/api/teams', {
//     method: 'POST',
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//       ...name
//     })
//   })
//   .then(response => response.json())
// });

// export const createTeam = (name) => (dispatch) =>
//   _createTeam(name)(dispatch)
//     .catch(err =>
//       console.log('Could not create a team:', err.message)
//     );

// const _deleteTeam = (id) => thunkCreator({
//   types: [
//     DELETE_TEAM_REQUEST,
//     DELETE_TEAM_SUCCESS,
//     DELETE_TEAM_FAILURE
//   ],

//   promise: fetch(`/api/teams/${id}`, {
//     method: 'DELETE',
//     headers: {
//       'Accept': 'text/html',
//       'Content-Type': 'text/html'
//     },
//     body: JSON.stringify({id})
//   })
//   .then(response => response.json())
// });

// export const deleteTeam = (id) => (dispatch) =>
//   _deleteTeam(id)(dispatch)
//     .catch(err =>
//       console.log('Could not delete team:', err.message)
//     );

// const _updateTeam = (_id, name) => thunkCreator({
//   types: [
//     UPDATE_TEAM_REQUEST,
//     UPDATE_TEAM_SUCCESS,
//     UPDATE_TEAM_FAILURE
//   ],

//   promise: fetch('/api/teams/', {
//     method: 'PUT',
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//       _id,
//       name
//     })
//   })
//   .then(response => response.json())
// });

// export const updateTeam = (_id, name) => (dispatch) =>
// _updateTeam(_id, name)(dispatch)
//   .catch(err =>
//     console.log('Could not update a team:', err.message)
//   );