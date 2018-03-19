const mongoose = require('mongoose');

const ShowSchema = new mongoose.Schema({
    title: {
        required: true,
        unique: true,
        type: String
    },
    seasons: [
        {
            title: {
                required: true,
                unique: true,
                type: String
            },
            episodes: [
                {
                    title: {
                        required: true,
                        unique: true,
                        type: String
                    },
                    episodeNumber: {
                        required: true,
                        unique: true,
                        type: Number
                    },
                    director: {
                        required: true,
                        type: String
                    },
                    actors: {
                        required: true,
                        type: String
                    },
                    releaseYear: {
                        required: true,
                        type: Number
                    },
                    releaseMonth: {
                        required: true,
                        type: String
                    },
                    releaseDay: {
                        required: true,
                        type: Number
                    }
                }
            ]
        }
    ]
});

const Show = module.exports = mongoose.model('Show', ShowSchema);

// create

module.exports.addShow = (show, callback) => {
    Show.create(show, callback);
}

// read all

module.exports.getShows = (callback, limit) => {
    Show.find(callback).limit(limit);
}

// read 1

module.exports.getShowById = (id, callback) => {
    Show.findById(id, callback);
}

// update

module.exports.updateShow = (id, show, options, callback) => {
    let query = {_id: id};

    Show.findOneAndUpdate(query, show, options, callback);
    
}

// delete

module.exports.deleteShow = (id, callback) => {
    let query = {_id: id};
    Show.remove(query, callback);
}