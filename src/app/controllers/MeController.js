const Artist = require('../models/Artist');
const { mutipleMongooseToObject } = require('../../util/mongoose');
class MeController {
    // [GET] /
    index(req, res, next) {}

    storedArtists(req, res, next) {
        Artist.find({}).then((artists) =>
            res.render('me/stored-artists', {
                artists: mutipleMongooseToObject(artists),
            }),
        );
    }

    trashArtists(req, res, next) {
        Artist.findDeleted({}).then((artists) =>
            res.render('me/trash-artists', {
                artists: mutipleMongooseToObject(artists),
            }),
        );
    }
}
module.exports = new MeController();
