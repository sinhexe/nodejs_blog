const Artist = require('../models/Artist');
const { mutipleMongooseToObject } = require('../../util/mongoose');
class MeController {
    // [GET] /
    index(req, res, next) {}

    storedArtists(req, res, next) {
        let artistQuery = Artist.find({});

        if (req.query.hasOwnProperty('_sort')) {
            artistQuery = artistQuery.sort({
                [req.query.column]: req.query.type,
            });
        }

        Promise.all([artistQuery, Artist.countDocumentsDeleted()])
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
