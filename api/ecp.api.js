const router = require("express").Router();
const controller = require("../controller/ecp.controller");
router.post("/", controller.auth); //авторизация
router.post("/create", controller.create); //создание
module.exports = router;
