const router = require('express').Router();
const { checkPolicy } = require('../../middlewares');
const tagController = require('./controller');

router.get('/tags', tagController.index);
router.post(
  '/tags',
  // checkPolicy('create', 'Tag'),
  tagController.store
);
router.put('/tags/:id', checkPolicy('update', 'Tag'), tagController.update);
router.delete('/tags/:id', checkPolicy('delete', 'Tag'), tagController.destroy);

module.exports = router;
