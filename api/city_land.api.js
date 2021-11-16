const controller = require("../controller/city_land.controller");
const router = require("express").Router();
router.get("/", controller.get); //получение всех городов
router.post("/", controller.add); //создание города
module.exports = router;
