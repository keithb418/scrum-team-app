import * as types from '../actionTypes';
import { fetchData, fetchDataSuccess, fetchDataError } from './fetch';
import API from '../utils/api';
import uuid from 'uuid';

export const fetchTeamMembers = teamMembers => ({
	type: types.FETCH_TEAM_MEMBERS,
	teamMembers
});

export const addTeamMember = teamMember => ({
	type: types.CREATE_TEAM_MEMBER,
	teamMember: {
		...teamMember,
		id: uuid()
	}
});

export const handleFetchTeamMember = id => dispatch => {
	dispatch(fetchData())
	return API.getTeamMember(id)
	.then(res => {
		dispatch(fetchTeamMember(res.data))
		dispatch(fetchDataSuccess());
	});
}

export const fetchTeamMember = teamMember => ({ 
	type: types.FETCH_TEAM_MEMBER, 
	teamMember
})


export const handleCreateTeamMember = (teamMember) => (dispatch) => {
  dispatch(addTeamMember(teamMember))
	return API.createTeamMember(teamMember)
	.then(res => res.data)
    .catch(err =>
	  console.log('Could not create a team member:', err.message)
	)
}

export const handleUpdateTeamMember = (teamMember) => (dispatch) => {
	dispatch({ type: types.UPDATE_TEAM_MEMBER, teamMember});
	return API.updateTeamMembers(teamMember)
	.then(res => res.data)
	.catch(err =>
	  console.log('Could not update team member:', err.message)
	);	 
}

export const handleDeleteTeamMember = (id) => (dispatch) => {
	dispatch({ type: types.DELETE_TEAM_MEMBER, id })
	return API.deleteTeamMembers(id)
	.then(res => res.data)
	.catch(err =>
	  console.log('Could not delete team member:', err.message)
	);
}

export const handleChangeTeam = (_id, team) => (dispatch) => {
	let teamChangeInfo = { _id, team };
	dispatch({ type: types.CHANGE_TEAM, result: teamChangeInfo });
	return API.updateTeamMembers(teamChangeInfo)
	.then(res => res.data)
	.catch(err => console.error('There was an error updating Team Members: ', err))
}

