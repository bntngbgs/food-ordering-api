const router = require('express').Router();
const { checkPolicy } = require('../../middlewares');
const cartController = require('./controller');

router.put('/carts', checkPolicy('update', 'Cart'), cartController.update);

router.get('/carts', checkPolicy('read', 'Cart'), cartController.index);

module.exports = router;
