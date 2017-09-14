import BaseResource from './BaseResource';

module.exports = (router) => {
    let teamResource = new BaseResource({
        router,
        resourceType: 'teams'
    });

    teamResource.addGetAll();
    teamResource.addGetOne();
    teamResource.addPost(({name}) => {
        return {name};
    }, 'A team already exists with that name');
    teamResource.addPut();
    teamResource.addDelete();
};