const router = require('express').Router();
const { checkPolicy } = require('../../middlewares');
const categoryController = require('./controller');

router.get('/categories', categoryController.index);

router.post(
  '/categories',
  checkPolicy('create', 'Category'),
  categoryController.store
);

router.put(
  '/categories/:id',
  checkPolicy('update', 'Category'),
  categoryController.update
);

router.delete(
  '/categories/:id',
  checkPolicy('delete', 'Category'),
  categoryController.destroy
);

module.exports = router;
