import API from "../utils/api";
import { fetchTeams } from "./teams";
import { fetchTeamMembers, fetchTeamMember } from "./teamMembers";
import { fetchRoles } from  "./roles";
import { fetchData, fetchDataSuccess, fetchDataError } from "./fetch";

export const fetchInitialData = () => dispatch => {
    dispatch(fetchData());
    return Promise.all([API.getRoles(), API.getTeams(), API.getTeamMembers()])
    .then(([roles, teams, teamMembers]) => {
        dispatch(fetchRoles(roles.data));
        dispatch(fetchTeams(teams.data));
        dispatch(fetchTeamMembers(teamMembers.data));
        dispatch(fetchDataSuccess());
    })
    .catch(err => {
        console.log("error fetching data", err);
        dispatch(fetchDataError());
    });  
};

export const fetchProfileData = id => dispatch => {
   dispatch(fetchData());
   return Promise.all([API.getTeamMember(id), API.getTeams()])
    .then(([teamMember, teams]) => {
        dispatch(fetchTeamMember(teamMember.data));
        dispatch(fetchTeams(teams.data));
        dispatch(fetchDataSuccess());
    })
    .catch(err => {
        console.log("error fetching data", err);
        dispatch(fetchDataError());
    });
};