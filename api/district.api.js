const controller = require("../controller/district.controller");
const router = require("express").Router();
router.get("/", controller.get); //получение всех регионов
router.post("/", controller.add); //создание региона
module.exports = router;
