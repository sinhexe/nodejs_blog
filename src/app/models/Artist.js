const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');

mongoose.plugin(slug);

const ObjectId = Schema.ObjectId;

const Artist = new Schema(
    {
        name: { type: String, maxlength: 255, require: true },
        description: { type: String, maxlength: 1000 },
        image: { type: String, maxlength: 300, require: true },
        slug: { type: String, slug: 'name', unique: true },
        videoid: { type: String },
    },
    {
        timestamps: true,
    },
);

module.exports = mongoose.model('Artist', Artist);
