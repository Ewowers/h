const router = require("express").Router();
const controller = require("../controller/user.directory.services.controller");
router.post("/add/:id", controller.add); //добавить
router.get("/all/:id", controller.get); //получить
router.get("/one/:userId/:id", controller.getOne); //получить по id
router.put("/:userId/:id", controller.put); //изменить
module.exports = router;
