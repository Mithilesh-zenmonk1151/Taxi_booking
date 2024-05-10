const router = require('express').Router();
const {  authController } = require('../controller');

router.post('/signup', authController.register);
router.post('/login',   authController.login);
// router.get('/users',   authController.getAllUser);

module.exports = router;