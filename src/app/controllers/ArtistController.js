const Artist = require('../models/Artist');
const { mongooseToObject } = require('../../util/mongoose');
class ArtistController {
    // [GET] /
    show(req, res, next) {
        Artist.findOne({ slug: req.params.slug }).then((artist) => {
            res.render('artists/show', {
                artist: mongooseToObject(artist),
            });
        });
    }
}

module.exports = new ArtistController();
