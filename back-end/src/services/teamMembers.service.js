var teamMembers = require('../models/teamMembers.schema.js');

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
exports.post = function(req, res){
    let resource = req.body;
    teamMembers.findById(req.params.id, (err, team) => {
       if(err){
        res.writeHead(500, {'Content-Type': 'text/plain'});
        res.end("Resources must be unique."); 
       }
       delete resource._id;
       teamMembers.create(resource, (teamMemberErr, teamMember) => {
           if(teamMemberErr){
            res.writeHead(500, {'Content-Type': 'text/plain'});
            res.end(teamMemberErr);
           }
           res.json(teamMember);
       });
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
exports.put = function(req, res){
    if(!req.body._id){
        res.status(500).send("A resource id must be specified.");
    }
    teamMembers.findById(req.body._id, (err, teamMember) => {
        let updateResource = Object.assign({}, teamMember);
        if(err){
            res.status(500).send("A resource does not exist with that id. Use a POST request to create it.");
        }
        delete req.body['_id'];
        teamMember.set(req.body);
        teamMember.save(function (err, updatedRole) {
            if (err){
                res.status(500).send("Internal Server Error");
            }
            res.json(updatedRole);
        });
    });
}