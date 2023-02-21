const mongoose = require('mongoose')

//Defining a Schema

const schema = mongoose.Schema;

const movieSchema = new schema(
    {
        name:{
            type: String,
            trim: true,
            required: true
        },
        releasedOn:{
            type: Date,
            trim: true,
            required: true
        }
    }
);

module.exports = mongoose.model('Movie',movieSchema)