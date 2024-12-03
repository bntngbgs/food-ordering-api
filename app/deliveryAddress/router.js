const router = require('express').Router();
const { checkPolicy } = require('../../middlewares');
const deliveryAddressController = require('./controller');

router.post(
  '/delivery-address',
  checkPolicy('create', 'DeliveryAddress'),
  deliveryAddressController.store
);

router.put('/delivery-address/:id', deliveryAddressController.update);

router.delete('/delivery-address/:id', deliveryAddressController.destroy);

router.get(
  '/delivery-address',
  checkPolicy('view', 'DeliveryAddress'),
  deliveryAddressController.index
);

module.exports = router;
