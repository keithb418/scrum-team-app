import axios from "axios";

class API {
    constructor () {
        this._api = axios.create({ baseURL: "/api" });
    }

    getTeamMemeber (id) {
        return this._api.get(`teamMembers/${id}`);
    }

    getRoles () {
        return this._api.get("roles");
    }

    getTeamMemebers () {
        return this._api.get("teamMembers");
    }

    getTeam (id) {
        return this._api.get(`teams/${id}`);
    }

    getTeams () {
        return this._api.get("teams");
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

    deleteTeamMemebers (id) {
        return this._api.delete(`teamMembers/${id}`);
    }

    deleteTeam (id) {
        return this._api.delete(`teams/${id}`);
    }

}

export default new API();