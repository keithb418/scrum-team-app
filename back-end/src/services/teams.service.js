var Teams = require('../models/teams.schema.js');

exports.getAll = function(req, res){
    Teams.find({}, (err, teams) => {    
        if(err){
            res.writeHead(500, {'Content-Type': 'text/plain'});
            res.end(err);
        }
        res.json({teams: teams});
    });
}
exports.getOne = function(req, res){
    Teams.find({_id: req.params.id}, (err, team) => {
        if(err){
            res.writeHead(404, {'Content-Type': 'text/plain'});
            res.end('Specified resource not found');
        }
        if(team[0]){
            res.json(team[0]);
        }    
    });
}
exports.post = function(req, res){
    let resource = req.body;
    Teams.findById(req.params.id, (err, team) => {
       if(err){
        res.writeHead(500, {'Content-Type': 'text/plain'});
        res.end("Resources must be unique."); 
       }
       delete resource._id;
       Teams.create(resource, (teamErr, team) => {
           if(teamErr){
            res.writeHead(500, {'Content-Type': 'text/plain'});
            res.end(teamErr);
           }
           res.json(team);
       });
    });
}
exports.put = function(req, res){
    if(!req.body._id){
        res.status(500).send("A resource id must be specified.");
    }
    Teams.findById(req.body._id, (err, team) => {
        if(err){
            res.status(500).send("A resource does not exist with that id. Use a POST request to create it.");
        }
        delete req.body['_id'];
        team.set(req.body);
        team.save(function (err, updatedTeam) {
            if (err){
                res.status(500).send("Internal Server Error");
            }
            res.json(updatedTeam);
        });
    });
}
exports.delete = function(req, res){
    Teams.findById(req.params.id, (err, team) => {
        if(err){
            res.writeHead(500, {'Content-Type': 'text/plain'});
            res.end("A resource does not exist with that id.");
        }
        team.remove((teamErr, removedTeam) => {
            if(teamErr){
                res.writeHead(500, {'Content-Type': 'text/plain'});
                res.end(err);
            }
            res.send({'id': req.params.id});
        });
    });
}