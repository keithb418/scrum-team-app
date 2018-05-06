const mongoose = require('mongoose');

let mongoAddress = process.env.MONGO_ADDRESS || 'localhost';
let url = `mongodb://${mongoAddress}:27017`;

mongoose.Promise = global.Promise;
mongoose.connect(url);

module.exports = { mongoose };