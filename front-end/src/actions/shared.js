import API from '../utils/api';
import { fetchTeams } from './teams';
import { fetchTeamMembers } from './teamMembers';
import { fetchRoles } from  './roles';

let getInitialData = API.getInitialData();
console.log(getInitialData);

export const fetchInitialData = () => dispatch => {
    getInitialData
        .then(({roles, teams, teamMembers}) => {
            dispatch(fetchRoles(roles));
            dispatch(fetchTeams(teams));
            dispatch(fetchTeamMembers(teamMembers));
        })
        .catch(err => console.log('error fetching data', err));
        
}