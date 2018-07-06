import express from 'express'
let router = express.Router();
var mongoose = require('./db/db.mongoose');
import teamsResource from './resources/TeamsResource';
import teamMembersResource from './resources/TeamMembersResource';
import rolesResource from './resources/RolesResource';

import teamsService from './services/teams.service';
import rolesService from './services/roles.service';
import teamMembersService from './services/teamMembers.service';

teamsResource(router);
teamMembersResource(router);
rolesResource(router);

router.get('', function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World, I am the Back End server for the Scrum Team app.  I now change as you code!\n');
});

router.get("/v1/teams", teamsService.getAll);
router.get("/v1/teams/:id", teamsService.getOne);
router.put("/v1/teams", teamsService.put);
router.post("/v1/teams", teamsService.post);
router.delete("/v1/teams/:id", teamsService.delete);

router.get("/v1/roles", rolesService.getAll);
router.get("/v1/roles/:id", rolesService.getOne);
router.put("/v1/roles", rolesService.put);
router.post("/v1/roles", rolesService.post);
router.delete("/v1/roles/:id", rolesService.delete);

router.get("/v1/teamMembers", teamMembersService.getAll);
router.get("/v1/teamMembers/:id", teamMembersService.getOne);
router.put("/v1/teamMembers", teamMembersService.put);
router.post("/v1/teamMembers", teamMembersService.post);
router.delete("/v1/teamMembers/:id", teamMembersService.delete);

module.exports = router;