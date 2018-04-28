import { fetchRoles } from '../../front-end/src/actions/roles';
import roleData from '../fixtures/roles';

test('should fetch roles action', () => {
    const roles = roleData;
    const action = fetchRoles(roles)
    expect(action).toEqual({
        type: 'FETCH_ROLES',
        roles
    });
});