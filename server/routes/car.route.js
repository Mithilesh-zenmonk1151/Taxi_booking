const router = require('express').Router();
const {  carController } = require('../controller');

router.post('/', carController.addCar);
router.put('/',carController.approvedByAdmin);
router.get("/",carController.getAllCars);
router.get("/approved",carController.getApprovedCars);

module.exports = router;