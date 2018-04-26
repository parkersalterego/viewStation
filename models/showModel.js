const mongoose = require('mongoose');

const ShowSchema = new mongoose.Schema({
    showTitle: {
        required: true,
        unique: true,
        type: String
    },
    seasons: [
        {
            seasonNumber: {
            required: true,
            unique: true,
            type: Number
            },
            episodes: [
                {
                    episodeTitle: {
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