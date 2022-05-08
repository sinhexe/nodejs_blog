const Artist = require('../models/Artist');
const { mutipleMongooseToObject } = require('../../util/mongoose');
class SiteController {
    // [GET] /
    index(req, res, next) {
        Artist.find({})
            .then((artists) => {
                res.render('home', {
                    artists: mutipleMongooseToObject(artists),
                });
            })
            .catch((error) => next(error));
    }

    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
