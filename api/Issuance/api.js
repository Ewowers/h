const router = require("express").Router();
const app = require("./app.api");
router.use("/app", app);
module.exports = router;
