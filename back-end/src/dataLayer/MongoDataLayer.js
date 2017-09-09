const {MongoClient, ObjectID} = require('mongodb');

let url = 'mongodb://localhost:27017/scrumteamappdb';

let MongoDataLayer = () => {
    let db = null;

    return {
        connect: (callback) => {
            MongoClient.connect(url, (err, database) => {
                if (err) return console.log(err);

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
        create: (resourceType = '', resource) => {

        },
        update: (resourceType = '', resource) => {

        },
        delete: (resourceType = '', id = '') => {

        }
    };
};

module.exports = MongoDataLayer();