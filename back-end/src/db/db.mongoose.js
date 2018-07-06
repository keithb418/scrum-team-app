const mongoose = require('mongoose');

let mongoAddress = process.env.MONGO_ADDRESS || 'localhost';
let mongoPort = process.env.MONGO_PORT || 27017;
let mongoDatabase = process.env.MONGO_DATABASE || "scrumteamappdb";

let url = `mongodb://${mongoAddress}:${mongoPort}/${mongoDatabase}`;

mongoose.Promise = global.Promise;
mongoose.connect(url);
mongoose.connection
    .on('error', console.error.bind(console, 'connection error:'));

module.exports = { mongoose };