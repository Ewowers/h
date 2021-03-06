const controller = require("../controller/user.controller");
const router = require("express").Router();
router.get("/", controller.findAll);
router.get("/roles", controller.roles);
router.get("/role=:role", controller.findType);
router.get("/user=:id", controller.findOne);
router.put("/:id", controller.update);
router.delete("/:id", controller.delete);
router.post("/create", controller.create);
router.post("/createRole", controller.createRole);
module.exports = router;
