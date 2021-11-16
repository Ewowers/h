const router = require("express").Router();
const controller = require("../controller/admin.ads.controller");
router.get("/", controller.findAll); //получение всех обьявлений
router.get("/:id", controller.findOne); //получение одного обьявлений
router.post("/", controller.create); // создание обьявлений
router.put("/:id", controller.update); // редактирование обьявлений
router.delete("/:id", controller.delete); // удаление роли
module.exports = router;
