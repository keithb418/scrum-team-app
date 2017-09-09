const {MongoClient} = require('mongodb');

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

        },
        getOne: (resourceType = '', id = '') => {

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