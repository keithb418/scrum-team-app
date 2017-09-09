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
};