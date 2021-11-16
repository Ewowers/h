const controller = require("../controller/statement.info.controller");
const router = require("express").Router();
router.post("/", controller.add); //создать
router.get("/", controller.get); //получить все
router.get("/:id", controller.getOne); //get by id
module.exports = router;
