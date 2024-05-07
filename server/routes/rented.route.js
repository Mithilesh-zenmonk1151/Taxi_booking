const router = require('express').Router();
const {  rentedController } = require('../controller');

router.post('/', rentedController.addrentedCar);
// router.put('/',carController.approvedByAdmin);
// router.get("/",carController.getAllCars);
// router.get("/approved",carController.getApprovedCars);

module.exports = router;