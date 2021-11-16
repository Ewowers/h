const router = require("express").Router();
const controller = require("../controller/user.mail.controller");
router.post("/:id", controller.add);
router.get("/user=:id", controller.getMy);
router.get("/message=:id", controller.getOne);
module.exports = router;
