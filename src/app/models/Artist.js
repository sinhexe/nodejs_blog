const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ObjectId = Schema.ObjectId;

const Artist = new Schema({
    name: { type: String, maxlength: 255 },
    desciption: { type: String, maxlength: 1000 },
    image: { type: String, maxlength: 300 },
    slug: { type: String },
});

module.exports = mongoose.model('Artist', Artist);
