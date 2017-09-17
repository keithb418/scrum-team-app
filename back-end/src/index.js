import express from 'express'
let router = express.Router();

import teamsResource from './resources/TeamsResource';
import teamMembersResource from './resources/TeamMembersResource';
import rolesResource from './resources/RolesResource';

teamsResource(router);
teamMembersResource(router);
rolesResource(router);

router.get('', function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World, I am the Back End server for the Scrum Team app.  I now change as you code!\n');
});

module.exports = router;