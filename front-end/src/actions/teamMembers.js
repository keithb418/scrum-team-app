import * as types from '../actionTypes';
import API from '../utils/api';
import uuid from 'uuid';

export const fetchTeamMembers = (teamMembers) => ({
    type: types.FETCH_TEAM_MEMBERS,
    teamMembers
});

export const createTeamMember = (teamMember) => dispatch => ({
    type: types.CREATE_TEAM_MEMBERS,
    teamMember: {
        ...teamMember,
        id: uuid()
    }
    //fixing post
});

// export const updateTeamMember = (teamMember) => thunkCreator({
//     type: types.UPDATE_TEAM_MEMBERS,
//     teamMember
// });

// export const createTeamMember = (teamMember) => (dispatch) =>
//   _createTeamMember(teamMember)(dispatch)
//     .catch(err =>
//       console.log('Could not create a team member:', err.message)
//     );

// export const updateTeamMember = (teamMember) => (dispatch) =>
//   _updateTeamMember(teamMember)(dispatch)
//     .catch(err =>
//       console.log('Could not update a team member:', err.message)
//     );

// const _deleteTeamMember = (id) => thunkCreator({
//   types: [
//     DELETE_TEAM_MEMBER_REQUEST,
//     DELETE_TEAM_MEMBER_SUCCESS,
//     DELETE_TEAM_MEMBER_FAILURE
//   ],

//   promise: fetch(`/api/teamMembers/${id}`, {
//     method: 'DELETE',
//     headers: {
//       'Accept': 'text/html',
//       'Content-Type': 'text/html'
//     },
//     body: JSON.stringify({id})
//   })
//   .then(response => response.json())
// });

// export const deleteTeamMember = (id) => (dispatch) =>
//   _deleteTeamMember(id)(dispatch)
//     .catch(err =>
//       console.log('Could not delete team member:', err.message)
//     );

// const _changeTeam = (_id, team) => thunkCreator({
//   types: [
//     CHANGE_TEAM_REQUEST,
//     CHANGE_TEAM_SUCCESS,
//     CHANGE_TEAM_FAILURE
//   ],

//   promise: fetch('/api/teamMembers/', {
//     method: 'PUT',
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//       _id,
//       team
//     })
//   })
//   .then(response => response.json())
// });

export const changeTeam = (_id, team) => (dispatch) => {
    let teamChangeInfo = { _id, team };
    API.updateTeamMemebers(teamChangeInfo)
    .then(res => res.data)
    .catch(err => console.error('There was an error updating Team Members: ', err))
    dispatch({ types: types.CHANGE_TEAM, result: teamChangeInfo });
}