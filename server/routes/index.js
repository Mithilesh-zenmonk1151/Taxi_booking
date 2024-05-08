// const { authenticateUser } = require('../middleware/auth');

const router = require('express').Router();

router.use('/auth', require('./user.route'));
router.use('/car', require('./car.route'));
router.use("/booking",require("./booking.route"));
router.use("/rented",require("./rented.route"));
router.use("/address",require("./address.route"));



module.exports = router;