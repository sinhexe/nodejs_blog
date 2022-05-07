const Artist = require('../models/Artist');
class SiteController {
    // [GET] /
    index(req, res) {
        Artist.find({}, function (err, artists) {
            if (!err) {
                res.json(artists);
                return;
            }
            res.status(400).json({ error: 'Error!!!' });
        });

        // res.render('home');
    }

    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
