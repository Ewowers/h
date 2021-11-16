const router = require("express").Router();
const controller = require("../controller/admin.users.controller");
router.get("/", controller.findAll); //получение всех пользователей
router.get("/:id", controller.findOne); //получение одного пользователя
router.post("/", controller.create); // создание пользователя
router.put("/:id", controller.update); // редактирование пользователя
router.delete("/:id", controller.delete); // удаление пользователя
module.exports = router;
