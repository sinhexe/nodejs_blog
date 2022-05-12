const Artist = require('../models/Artist');
const { mongooseToObject } = require('../../util/mongoose');
const { redirect } = require('express/lib/response');
class ArtistController {
    // [GET]
    // /artist/:slug
    show(req, res, next) {
        Artist.findOne({ slug: req.params.slug })
            .then((artist) => {
                res.render('artists/show', {
                    artist: mongooseToObject(artist),
                });
            })
            .catch(next);
    }
    // /artist/create
    create(req, res, next) {
        res.render('artists/create.hbs');
    }
    // /artist/:id/edit
    edit(req, res, next) {
        Artist.findById(req.params.id)
            .then((artist) =>
                res.render('artists/edit.hbs', {
                    artist: mongooseToObject(artist),
                }),
            )
            .catch(next);
    }

    // [POST]
    // /artist/store
    store(req, res, next) {
        const formData = req.body;
        formData.image = `http://img.youtube.com/vi/${req.body.videoid}/hqdefault.jpg`;

        const artist = new Artist(formData);
        artist
            .save()
            .then(() => res.redirect('/'))
            .catch(next);
    }

    // [PUT]
    // /artists/:id
    update(req, res, next) {
        Artist.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/me/stored/artists'))
            .catch(next);
    }

    // [DELETE]
    // artists/:id
    delete(req, res, next) {
        Artist.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }
}

module.exports = new ArtistController();
