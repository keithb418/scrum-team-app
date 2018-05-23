var Roles = require('../models/roles.schema.js');

exports.index = function(req, res){
    res.send('NOT IMPLEMENTED: Site Home Page');
}
exports.getAll = function(req, res){
    Roles.find({}, (err, roles) => {    
        if(err){
            res.writeHead(500, {'Content-Type': 'text/plain'});
            res.end(err);
        }
        res.json({roles: roles});
    });
}
exports.getOne = function(req, res){
    Roles.find({_id: req.params.id}, (err, roles) => {
        if(err){
            res.writeHead(404, {'Content-Type': 'text/plain'});
            res.end('Specified resource not found');
        }
        res.json(roles);
    });
}
exports.post = function(req, res){
    let resource = req.body;
    Roles.findById(req.params.id, (err, role) => {
       if(role){
        res.writeHead(500, {'Content-Type': 'text/plain'});
        res.end("Resources must be unique."); 
       }
       delete resource._id;
       Roles.create(resource, (err, role) => {
           if(err){
            res.writeHead(500, {'Content-Type': 'text/plain'});
            res.end(err);
           }
           res.json(result);
       });
    });
}
exports.put = function(req, res){
    if(!req.body._id){
        res.status(500).send("A resource id must be specified.");
    }
    Roles.findById(req.body._id, (err, role) => {
        if(!err){
            res.status(500).send("A resource does not exist with that id. Use a POST request to create it.");
        }
        role.set({ name: req.body.name });
        role.save(function (err, updatedRole) {
            if (!err){
                res.status(500).send("Internal Server Error");
            }
            res.json(updatedRole);
        });
    });
}
exports.delete = function(req, res){
    Roles.findById(req.params.id, (err, role) => {
        if(err){
            res.writeHead(500, {'Content-Type': 'text/plain'});
            res.end("A resource does not exist with that id.");
        }
        role.remove((teamErr, removedRole) => {
            if(teamErr){
                res.writeHead(500, {'Content-Type': 'text/plain'});
                res.end(err);
            }
            res.send({'id': req.params.id});
        });
    });
}