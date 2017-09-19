import BaseResource from './BaseResource';

module.exports = (router) => {
    let teamMembersResource = new BaseResource({
        router,
        resourceType: 'teamMembers'
    });

    teamMembersResource.addGetAll();
    teamMembersResource.addGetOne();
    teamMembersResource.addPost(({email}) => {
        return {email};
    }, 'A team member already exists with that email');
    teamMembersResource.addPut();
    teamMembersResource.addDelete();
};