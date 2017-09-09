import MongoDataLayer from '../dataLayer/MongoDataLayer';

module.exports = (router) => {
    router.get('/teams', (req, res) => {
        MongoDataLayer.getAll('teams').then((result) => {
            res.json({
                teams: result
            });
        }).catch((err) => {
            res.writeHead(500, {'Content-Type': 'text/plain'});
            res.end(err);
        });
    });

    router.get('/teams/:id', (req, res) => {
        MongoDataLayer.getOneById('teams', req.params.id).then((result) => {
            res.json(result);
        }).catch(() => {
            res.writeHead(404, {'Content-Type': 'text/plain'});
            res.end('Specified resource not found');
        });
    });

    router.post('/teams', (req, res) => {
        let name = req.body.name;

        MongoDataLayer.getOneByQuery('teams', {name}).then(() => {
            res.writeHead(500, {'Content-Type': 'text/plain'});
            res.end('A team already exists with that name');
        }).catch(() => {
            MongoDataLayer.create('teams', {name}).then((result) => {
                res.json(result);
            }).catch((err) => {
                res.writeHead(500, {'Content-Type': 'text/plain'});
                res.end(err);
            });
        });
    });

    let updateTeam = (id, team, req, res) => {
        if (!id) {
            res.writeHead(500, {'Content-Type': 'text/plain'});
            res.end("A resource id must be specified.");
        } else {
            MongoDataLayer.getOneById('teams', id).then(() => {
                MongoDataLayer.update('teams', team).then((result) => {
                    res.json(result);
                }).catch((err) => {
                    res.writeHead(500, {'Content-Type': 'text/plain'});
                    res.end(err);
                });
            }).catch(() => {
                res.writeHead(500, {'Content-Type': 'text/plain'});
                res.end("A resource does not exist with that id. Use a POST request to create it.");
            });
        }
    };

    router.put('/teams', (req, res) => {
        updateTeam(req.body._id, req.body, req, res);
    });

    router.put('/teams/:id', (req, res) => {
        updateTeam(req.params.id, req.body, req, res);
    });

    router.delete('/teams/:id', (req, res) => {
        let id = req.params.id;

        MongoDataLayer.getOneById('teams', req.params.id).then(() => {
            MongoDataLayer.delete('teams', id).then(() => {
                res.send('resource deleted successfully');
            }).catch((err) => {
                res.writeHead(500, {'Content-Type': 'text/plain'});
                res.end(err);
            });
        }).catch(() => {
            res.writeHead(500, {'Content-Type': 'text/plain'});
            res.end("A resource does not exist with that id.");
        });
    });
};