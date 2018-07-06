var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var teamsSchema = new Schema({
    _id: Schema.Types.ObjectId,
    name: { 
        type: String, 
        required: true 
    }
});
var Teams = mongoose.model('teams', teamsSchema);
module.exports = Teams;