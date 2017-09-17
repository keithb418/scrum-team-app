import BaseResource from './BaseResource';

module.exports = (router) => {
    let rolesResource = new BaseResource({
        router,
        resourceType: 'roles'
    });

    rolesResource.addGetAll();
};