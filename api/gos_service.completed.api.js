const router = require("express").Router();
const controller = require("../controller/gos_service.completed.controller");
router.get("/", controller.get); //получение всей базы
router.get("/id=:id", controller.getOne); //получение по uuid
router.post("/", controller.add); //создать
router.put("/:id", controller.put); //изменить по uuid
router.delete("/:id", controller.delete); //удалить по uuid
module.exports = router;
