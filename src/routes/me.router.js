const express = require('express');
const router = express.Router();

const meController = require('../app/controllers/meController');

router.get('/stored/artists', meController.storedArtists);

module.exports = router;
