const router = require('express').Router();
const {  userController } = require('../controller');

// router.post('/', bookingController.createBooking);
router.put('/',userController.updateUser);
router.get("/",userController.getUsers);
// router.get("/",bookingController.getAllBookings);
// router.get("/approved",carController.getApprovedCars);

module.exports = router;