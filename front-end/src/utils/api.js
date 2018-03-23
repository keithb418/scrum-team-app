import axios from 'axios';

class API {
    constructor() {
        this._api = axios.create({ baseURL: '/api' });
    }

    getInitialData() {
       return Promise.all([this.getRoles(), this.getTeams(), this.getTeamMemebers()])
        .then(([rolesData, teamsData, teamMembersData]) => ({
            roles: rolesData.data,
            teams: teamsData.data,
            teamMembers: teamMembersData.data,    
        }))
    }

    getTeamMemeber(id) {
        return this._api.get(`teamMembers/${id}`)
    }

    getRoles() {
        return this._api.get('roles');
    }

    getTeamMemebers() {
        return this._api.get('teamMembers');
    }

    getTeams() {
        return this._api.get('teams');
    }

    createTeamMemebers(teamMember) {
        return this._api.post('teamMembers', teamMembers);
    }

    createTeams(team) {
        return this._api.post('teams', team);
    }

    updateTeamMemebers(teamMember) {
        return this._api.put('teamMembers', teamMember);
    }

    updateTeams(team) {
        return this._api.put('teams', team);
    }

    deleteTeamMemebers(id) {
        return this._api.delete(`teamMembers/${id}`);
    }

    deleteTeams(id) {
        return this._api.delete(`teams/${id}`);
    }

}

export default new API();