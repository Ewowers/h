const controller = require("../controller/statement.controller");
const router = require("express").Router();
router.post("/", controller.add); //создать
router.get("/", controller.get); //получить все
module.exports = router;
