const router = require('express').Router();
const {  addressController} = require('../controller');

router.post('/', addressController.addUserAddress);
router.put('/',addressController.updateAddress);
router.get("/",addressController.getAddress);
// console.log("sderrhf========");
// router.get("/",carController.getAllCars);
// router.get("/approved",carController.getApprovedCars);

module.exports = router;