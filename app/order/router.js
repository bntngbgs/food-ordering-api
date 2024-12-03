const router = require('express').Router();
const orderController = require('./controller');
const { checkPolicy } = require('../../middlewares');

router.post('/orders', checkPolicy('create', 'Order'), orderController.store);

router.get('/orders', checkPolicy('view', 'Order'), orderController.index);

module.exports = router;
