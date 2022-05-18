const Artist = require('../models/Artist');
const { mutipleMongooseToObject } = require('../../util/mongoose');
class MeController {
    // [GET] /
    index(req, res, next) {}

    storedArtists(req, res, next) {
        Promise.all([Artist.find(), Artist.countDocumentsDeleted()])
            .then(([artists, deletedCount]) =>
                res.render('me/stored-artists', {
                    deletedCount: deletedCount,
                    artists: mutipleMongooseToObject(artists),
                }),
            )
            .catch(next);
    }

    trashArtists(req, res, next) {
        Artist.findDeleted().then((artists) =>
            res.render('me/trash-artists', {
                artists: mutipleMongooseToObject(artists),
            }),
        );
    }
}
module.exports = new MeController();
