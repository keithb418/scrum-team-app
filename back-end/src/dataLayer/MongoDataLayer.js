const {MongoClient, ObjectID} = require('mongodb');

let mongoAddress = process.env.MONGO_ADDRESS || 'localhost';
let url = `mongodb://${mongoAddress}:27017/scrumteamappdb`;

let MongoDataLayer = () => {
    let db = null;

    return {
        connect: (callback) => {
            MongoClient.connect(url, (err, database) => {
                if (err) {
                    return console.log(err);
                }

                console.log('Connected successfully to MongoDB');

                db = database;

                if (typeof callback === 'function') {
                    callback();
                }
            });
        },
        getAll: (resourceType = '') => {
            return new Promise((resolve, reject) => {
                db.collection(resourceType).find().toArray((err, result) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(result);
                    }
                });
            });
        },
        getOneById: (resourceType = '', id = '') => {
            return new Promise((resolve, reject) => {
                db.collection(resourceType).findOne({_id: new ObjectID(id)}).then((document) => {
                    if (document) {
                        resolve(document);
                    } else {
                        reject();
                    }
                });
            });
        },
        getOneByQuery: (resourceType = '', query = {}) => {
            return new Promise((resolve, reject) => {
                db.collection(resourceType).findOne(query).then((document) => {
                    if (document) {
                        resolve(document);
                    } else {
                        reject();
                    }
                });
            });
        },
        create: (resourceType = '', resource = {}) => {
            return new Promise((resolve, reject) => {
                db.collection(resourceType).insertOne(resource, (err, result) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(Object.assign({
                            _id: result.upsertedId
                        }, resource));
                    }
                });
            });
        },
        update: (resourceType = '', resource = {}) => {
            return new Promise((resolve, reject) => {
                let updateResource = Object.assign({}, resource);

                updateResource.delete('_id');

                db.collection(resourceType).updateOne({_id: ObjectID(resource._id)}, {
                    $set: updateResource
                }).then((err, result) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(resource);
                    }
                }).catch((err) => {
                    reject(err);
                });
            });
        },
        delete: (resourceType = '', id = '') => {
            return new Promise((resolve, reject) => {
                db.collection(resourceType).deleteOne({_id: ObjectID(id)}, {}, (err, result) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve();
                    }
                });
            });
        }
    };
};

module.exports = new MongoDataLayer();