const { Router } = require("express");
const controller = require("../controller/auth.controller");
const router = Router();
router.post("/", controller.auth); //авторизация
router.get("/active/:id", controller.active); // активация юзера
router.post("/registr", controller.regist); //регистрация
router.post("/onload", controller.onload); //проверка на наличие токина
router.post("/ecp/token", (req, res) => console.log(req.body));
module.exports = router;
