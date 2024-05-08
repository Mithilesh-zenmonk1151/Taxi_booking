const router = require('express').Router();
const {  carController } = require('../controller');
const {upload}= require("../middleware/fileupload")

router.post('/', carController.addCar);
router.put('/',carController.approvedByAdmin);
router.get("/",carController.getAllCars);
router.get("/approved",carController.getApprovedCars);

module.exports = router;
// router.post("/", upload.array('images',10), postsController.createPosts);
// const { upload } = require("../middlewares/upload.middleware");
