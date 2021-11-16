const router = require("express").Router();
const controller = require("../controller/user.directory.users.controller");

router.post("/add/:id", controller.add); //добавить
router.get("/all/:id", controller.get); //получить
router.get("/one/:userId/:id", controller.getOne); //получить по id
module.exports = router;
