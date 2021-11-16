const router = require("express").Router();
const controller = require("../controller/admin.layer.controller");
router.get("/", controller.findAll); //получение всех слоев
router.get("/:id", controller.findOne); //получение одного слоя
router.post("/", controller.create); // создание слоя
router.put("/:id", controller.update); // редактирование слоя
router.delete("/:id", controller.delete); // удаление слоя
module.exports = router;
