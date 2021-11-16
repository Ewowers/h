const router = require("express").Router();
const controller = require("../controller/admin.workDay.controller");
router.get("/", controller.findAll); //получение всех рабочих дней
router.get("/:id", controller.findOne); //получение одного рабочего дня
router.post("/", controller.create); // создание рабочего дня
router.put("/:id", controller.update); // редактирование рабочего дня
router.delete("/:id", controller.delete); // удаление рабочего дня
module.exports = router;
