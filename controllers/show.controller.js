const express = require('express');
const Show = require('../models/showModel');

class ShowController {
    constructor(router) {
        router.route('/shows/:_id')
            .get(this.getOne)
            .put(this.updateOne)
            .delete(this.deleteOne);
        router.route('/shows')
            .get(this.getAll)
            .post(this.insertOne);
    }

    async getOne(req, res, next) {
        try{
            Show.getShowById(req.params._id, (err, show) => {
                res.json(show);
            });
        } catch (err) {
            next(err);
        }
    }

    async updateOne(req, res, next) {
        try {
            let id = req.params._id;
            let show = new Show(req.body);

            Show.updateMovie(id, movie, {}, (err, show) => {
                res.json(show);
            });
        } catch(err) {
            next(err);
        }
    }

    async deleteOne(req, res, next) {
        try {   
            let id = req.params._id;

            Show.deleteShow(id, (err, movie) => {
                res.json(show);
            });
        } catch(err) {
            next(err);
        }
    }

    async getAll(req, res, next) {
        try {
            Show.getShows((err, shows) => {
                res.json(shows);
            });
        } catch (err) {
            next (err);
        }
    }

    async insertOne(req, res, next) {
        try {
            let show = new Show(req.body);

            Show.addShow(show, (err, show) => {
                res.json(show);
            });
        } catch(err) {
            next(err);
        }
    }



}

module.exports = ShowController;