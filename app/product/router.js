const router = require('express').Router();
const multer = require('multer');
const os = require('os');
const productController = require('./controller');
const { checkPolicy } = require('../../middlewares');

router.get('/products', productController.index);

router.put(
  '/products/:id',
  multer({ dest: os.tmpdir() }).single('image'),
  checkPolicy('update', 'Product'),
  productController.update
);
router.post(
  '/products',
  multer({ dest: os.tmpdir() }).single('image'),
  // checkPolicy('create', 'Product'),
  productController.store
);

router.delete(
  '/products/:id',
  checkPolicy('delete', 'Product'),
  productController.destroy
);

module.exports = router;
