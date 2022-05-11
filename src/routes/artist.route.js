const express = require('express');
const router = express.Router();

const artistController = require('../app/controllers/ArtistController');

router.get('/create', artistController.create);
router.post('/store', artistController.store);
router.get('/:id/edit', artistController.edit);
router.put('/:id', artistController.update);
router.get('/:slug', artistController.show);

module.exports = router;
