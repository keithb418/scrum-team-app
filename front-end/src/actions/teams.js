import * as types from '../actionTypes'
import API from '../utils/api';
import uuid from 'uuid';
import { handleFetchTeamMember } from './teamMembers';
import { fetchData, fetchDataSuccess, fetchDataError } from './fetch';

export const fetchTeams = teams => ({
    type: types.FETCH_TEAMS,
    teams
});

export const fetchTeam = team => ({
    type: types.FETCH_TEAM,
    team
});

export const handleFetchTeam = id => dispatch => {
    dispatch(fetchData());
    API.getTeam(id)
    .then(res => {
        dispatch(fetchTeam(res.data));
        dispatch(fetchDataSuccess());
    });
}

export const handleCreateTeam = team => dispatch =>{
    dispatch({type: types.CREATE_TEAM, team: { _id: uuid(), ...team }});
    API.createTeams(team)
    .then(res => res.data)
    .catch(err =>
      console.log('Could not create a team:', err.message)
    );
}

export const handleDeleteTeam = id => dispatch => {
    dispatch({type: types.DELETE_TEAM, id})
    API.deleteTeam(id)
    .then(res => res.data)
    .catch(err => console.log('Could not delete team:', err.message));
}
    
export const handleUpdateTeam = (team) => dispatch => {
    dispatch({type: types.UPDATE_TEAM, team })
    API.updateTeams(team)
    .then(res => res.data)
    .catch( err => console.log('could not update team', err));
}
