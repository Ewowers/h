const router = require("express").Router();
//Утверждение землеустроительных проектов
router.use("/statement", require("./statement.api"));

//Выдача решения на изменение целевого назначения земельного участка
router.use("/change/app", require("./change.app.api")); // 1 форма ЗАПОЛНЕНИЕ ЗАЯВЛЕНИЯ
router.use("/change/object", require("./change.objectInfo.api")); // 2 форма ДАННЫЕ ОБЪЕКТА
router.use("/change/file", require("./change.file.api")); // 3 форма ЭЛЕКТРОННЫЕ КОПИИ ДОКУМЕНТОВ
module.exports = router;
