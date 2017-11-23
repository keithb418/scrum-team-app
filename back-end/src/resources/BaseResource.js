import MongoDataLayer from '../dataLayer/MongoDataLayer';

class BaseResource {
    constructor(options) {
        Object.assign(this, {
            router: options.router,
            resourceType: options.resourceType || '',
            validateResource: typeof options.validateResource === 'function' ? options.validateResource : () => true
        });
    }
    addGetAll(parseResults = (results) => results) {
        this.router.get(`/${this.resourceType}`, (req, res) => {
            MongoDataLayer.getAll(this.resourceType).then((result) => {
                let returnResults = {};
                returnResults[this.resourceType] = parseResults(result);

                res.json(returnResults);
            }).catch((err) => {
                res.writeHead(500, {'Content-Type': 'text/plain'});
                res.end(err);
            });
        });
    }
    addGetOne(parseResult = (result) => result) {
        this.router.get(`/${this.resourceType}/:id`, (req, res) => {
            MongoDataLayer.getOneById(this.resourceType, req.params.id).then((result) => {
                res.json(parseResult(result));
            }).catch(() => {
                res.writeHead(404, {'Content-Type': 'text/plain'});
                res.end('Specified resource not found');
            });
        });
    }
    addPost(getUniqueQuery = () => {}, errorMsg = 'Resources must be unique.') {
        this.router.post(`/${this.resourceType}`, (req, res) => {
            let resource = req.body;

            MongoDataLayer.getOneByQuery(this.resourceType, getUniqueQuery(resource)).then(() => {
                res.writeHead(500, {'Content-Type': 'text/plain'});
                res.end(errorMsg);
            }).catch(() => {
                delete resource._id;

                MongoDataLayer.create(this.resourceType, resource).then((result) => {
                    res.json(result);
                }).catch((err) => {
                    res.writeHead(500, {'Content-Type': 'text/plain'});
                    res.end(err);
                });
            });
        });
    }
    addPut() {
        let updateResource = (id, resource, req, res) => {
            if (!id) {
                res.status(500).send("A resource id must be specified.");
            } else {
                MongoDataLayer.getOneById(this.resourceType, id).then(() => {
                    MongoDataLayer.update(this.resourceType, resource).then((result) => {
                        res.json(result);
                    }).catch((err) => {
                        res.status(500).send("Internal Server Error");
                    });
                }).catch(() => {
                    res.status(500).send("A resource does not exist with that id. Use a POST request to create it.");
                });
            }
        };

        this.router.put(`/${this.resourceType}`, (req, res) => {
            updateResource(req.body._id, req.body, req, res);
        });

        // this.router.put(`/${this.resourceType}/:id`, (req, res) => {
        //     updateResource(req.params.id, req.body, req, res);
        // });
    }
    addDelete() {
        this.router.delete(`/${this.resourceType}/:id`, (req, res) => {
            let id = req.params.id;

            MongoDataLayer.getOneById(this.resourceType, req.params.id).then(() => {
                MongoDataLayer.delete(this.resourceType, id).then(() => {
                    res.send({'id': id});
                }).catch((err) => {
                    res.writeHead(500, {'Content-Type': 'text/plain'});
                    res.end(err);
                });
            }).catch(() => {
                res.writeHead(500, {'Content-Type': 'text/plain'});
                res.end("A resource does not exist with that id.");
            });
        });
    }
};

module.exports = BaseResource;

