var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var teamMembersSchema = new Schema({
    _id: Schema.Types.ObjectId,
    name: String,
    email: String,
    team: String,
    teamLead: Boolean,
    teamHistory: [String],
    role : String,
    skills: [String]
});
var TeamMembers = mongoose.model('teamMembers', teamMembersSchema, "teamMembers");
module.exports = TeamMembers;