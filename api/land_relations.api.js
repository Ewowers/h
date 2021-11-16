const controller = require("../controller/land_relations.controller");
const router = require("express").Router();
router.get("/land", controller.getLand); // ЗЕМЕЛЬНЫЕ ОТНОШЕНИЯ GET
router.post("/land", controller.addLand); // ЗЕМЕЛЬНЫЕ ОТНОШЕНИЯ POST
router.get("/architecture", controller.getArchitecture); // АРХИТЕКТУРА И ГРАДОСТРОИТЕЛЬСТВО GET
router.post("/architecture", controller.addArchitecture); // АРХИТЕКТУРА И ГРАДОСТРОИТЕЛЬСТВО POST
router.get("/support", controller.getSupport); // ПОДДЕРЖКА ПРЕДПРИНИМАТЕЛЬСКОЙ ДЕЯТЕЛЬНОСТИ GET
router.post("/support", controller.addSupport); // ПОДДЕРЖКА ПРЕДПРИНИМАТЕЛЬСКОЙ ДЕЯТЕЛЬНОСТИ POST
module.exports = router;
