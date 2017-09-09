import MongoDataLayer from '../dataLayer/MongoDataLayer';
import express from 'express'

module.exports = (router) => {
    router.get('/teams', (req, res) => {
        MongoDataLayer.getAll('teams').then((result) => {
            res.json({
                teams: result
            });
        }).catch((err) => {
            res.status(500).send(err);
        });
    });

    router.get('/teams/:id', (req, res) => {
        MongoDataLayer.getOneById('teams', req.params.id).then((result) => {
            res.json(result);
        }).catch(() => {
            res.writeHead(404, {'Content-Type': 'text/plain'});
            res.end('Specified resource not found');
        });
    });
};