const router = require("express").Router();
const controller = require("../controller/admin.organization.controller");
router.get("/", controller.findAll); //получение всех роли
router.get("/:id", controller.findOne); //получение одного роли
router.post("/", controller.create); // создание роли
router.put("/:id", controller.update); // редактирование роли
router.delete("/:id", controller.delete); // удаление роли
module.exports = router;
