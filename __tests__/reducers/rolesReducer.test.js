import rolesReducer from "../../front-end/src/reducers/rolesReducer";
import rolesData from '../fixtures/roles';
import defaultRoles from "../../front-end/src/reducers/defaultRoles";


test('should set default state', () => {
    const state = rolesReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual(defaultRoles.roles);
});

test('should set team members', () => {
    const roles = rolesData;
    const action = { type: 'FETCH_ROLES', roles: { roles } };
    const state = rolesReducer(defaultRoles.roles, action);
    expect(state).toEqual(defaultRoles.roles);
});

