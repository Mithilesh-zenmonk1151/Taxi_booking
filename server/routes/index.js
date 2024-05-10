// const { authenticateUser } = require('../middleware/auth');

const router = require('express').Router();

router.use('/auth', require('./auth.route'));
router.use('/car', require('./car.route'));
router.use("/booking",require("./booking.route"));
router.use("/rented",require("./rented.route"));
router.use("/address",require("./address.route"));
router.use("/user", require("./user.route"))



module.exports = router;