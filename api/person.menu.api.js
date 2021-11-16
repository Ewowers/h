const router = require("express").Router();
const controller = require("../controller/person.menu.controller");
router.post("/", controller.create); //добавить
router.get("/", controller.findAll); //получить
router.get("/:id", controller.findOne); //получить по id
router.put("/:id", controller.update); //изменить
router.delete("/:id", controller.delete); //удаление
module.exports = router;
