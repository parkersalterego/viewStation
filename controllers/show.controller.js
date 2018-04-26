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
            await Show.findById(req.params._id)
                .then(show => res.json(show));
        } catch (err) {
            next(err);
        }
    }

    async updateOne(req, res, next) {
        try {
           await Show.findOneAndUpdate(req.params._id, req.body, {new: true})
            .then(show => res.json(show));
        } catch(err) {
            next(err);
        }
    }

    async deleteOne(req, res, next) {
        try {   
            Show.remove({_id: req.params._id})
                .then(show => res.json(show));
        } catch(err) {
            next(err);
        }
    }

    async getAll(req, res, next) {
        try {
            await Show.find()
                .then(shows => res.json(shows));
        } catch (err) {
            next (err);
        }
    }

    async insertOne(req, res, next) {
        try {
            await Show.create(new Show(req.body))
                .then(show => res.json(show));
        } catch(err) {
            next(err);
        }
    }

}

module.exports = ShowController;