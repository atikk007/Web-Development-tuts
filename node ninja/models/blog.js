const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema({

    title: {
        type: String,
        required: true
    },

    snippet: {
        type: String,
        required: true
    },

    body: {
        type: String,
        required: true
    }
}, { timestamps: true });

/* timestamps are automaticaly assigned by mongoDb we don't have to pass its value in our model's instance */

const Blog = mongoose.model('blog', blogSchema)
// this 'blog' will look for plularized blog's' collection in our database. for eg mongoose.model('Apple') will look for 'Apples'

module.exports = Blog;