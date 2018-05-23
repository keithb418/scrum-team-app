var teamMembers = require('../models/members.schema.js');

exports.index = function(req, res){
    res.send('NOT IMPLEMENTED: Site Home Page');
}
exports.getAll = function(req, res){
    teamMembers.find({}, (err, members) => {  
        if(err){
            res.writeHead(500, {'Content-Type': 'text/plain'});
            res.end(err);
        }
        res.json({teamMembers: members});
    });
}
exports.getOne = function(req, res){
    teamMembers.find({_id: req.params.id}, (err, members) => {
        if(err){
            res.writeHead(404, {'Content-Type': 'text/plain'});
            res.end('Specified resource not found');
        }
        if(members[0]){
            res.json(members[0]);
        }
     
    });
}
exports.delete = function(req, res){
    teamMembers.findById(req.params.id, (err, teamMember) => {
        if(err){
            res.writeHead(500, {'Content-Type': 'text/plain'});
            res.end("A resource does not exist with that id.");
        }
        teamMember.remove((teamErr, removedMember) => {
            if(teamErr){
                res.writeHead(500, {'Content-Type': 'text/plain'});
                res.end(err);
            }
            res.send({'id': req.params.id});
        });
    });
}