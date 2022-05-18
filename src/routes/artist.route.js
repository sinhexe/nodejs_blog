const express = require('express');
const router = express.Router();

const artistController = require('../app/controllers/ArtistController');

router.get('/create', artistController.create);
router.post('/store', artistController.store);
router.post('/handle-form-actions', artistController.handleFormActions);
router.get('/:id/edit', artistController.edit);
router.put('/:id', artistController.update);
router.delete('/:id', artistController.delete);
router.delete('/:id/force', artistController.deleteForce);
router.patch('/:id/restore', artistController.restore);
router.get('/:slug', artistController.show);

module.exports = router;
