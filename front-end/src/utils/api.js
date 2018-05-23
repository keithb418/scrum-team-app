import axios from "axios";

class API {
    constructor () {
        this._api = axios.create({ baseURL: "/api" });
    }

    getTeamMember (id) {
        return this._api.get(`v1/teamMembers/${id}`);
    }

    getRoles () {
        return this._api.get("v1/roles");
    }

    getTeamMembers () {
        return this._api.get("v1/teamMembers");
    }

    getTeam (id) {
        return this._api.get(`v1/teams/${id}`);
    }

    getTeams () {
        return this._api.get("v1/teams");
    }

    createTeamMember (teamMember) {
        return this._api.post("teamMembers", teamMember);
    }

    createTeams (team) {
        return this._api.post("teams", team);
    }

    updateTeamMembers (teamMember) {
        return this._api.put("teamMembers", teamMember);
    }

    updateTeams (team) {
        return this._api.put("teams", team);
    }

    deleteTeamMembers (id) {
        return this._api.delete(`v1/teamMembers/${id}`);
    }

    deleteTeam (id) {
        return this._api.delete(`v1/teams/${id}`);
    }

}

export default new API();