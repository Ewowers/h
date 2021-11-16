const router = require("express").Router();
const controller = require("../../controller/mongo/fs.chunks.controller");
router.get("/", controller.findAll);
module.exports = router;
