const express = require('express');
const router = express.Router();

const meController = require('../app/controllers/meController');

router.get('/stored/artists', meController.storedArtists);
router.get('/trash/artists', meController.trashArtists);

module.exports = router;
