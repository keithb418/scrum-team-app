var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var rolesSchema = new Schema({
    _id: Schema.Types.ObjectId,
    name: { 
        type: String, 
        required: true 
    }
});
var Roles = mongoose.model('Roles', rolesSchema);
module.exports = Roles;





