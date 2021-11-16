const controller = require("../controller/gos_service.my_completed.controller");
const router = require("express").Router();
router.get("/user=:id", controller.get); //получение по uuid юзера
router.get("/user-task=:id", controller.getOne); //получение одного задание по id задания
router.post("/add/:id", controller.add); //создание
module.exports = router;
