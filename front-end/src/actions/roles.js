import * as types from '../actionTypes'

export const fetchRoles = (roles) => ({
    type: types.FETCH_ROLES,
    roles
});