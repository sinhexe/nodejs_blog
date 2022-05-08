const express = require('express');
const router = express.Router();

const artistController = require('../app/controllers/ArtistController');
const { route } = require('./site.route');

router.get('/:slug', artistController.show);

module.exports = router;
