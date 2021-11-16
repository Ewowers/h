const { Router } = require("express");
const cors = require("cors");
const auth = require("./api/auth.api");
const controllerAuth = require("./controller/auth.controller");
const users = require("./api/users.api");
const land_relations = require("./api/land_relations.api");
const city = require("./api/city_land.api");
const statement = require("./api/statement.api");
const statementInfo = require("./api/statement.info.api");
const ecp = require("./api/ecp.api");
const gos_received = require("./api/gos_service.received.api");
const gos_execution = require("./api/gos_service.execution.api");
const gos_completed = require("./api/gos_service.completed.api");
const gos_execution_task = require("./api/gos_service.my_execution.api");
const gos_completed_task = require("./api/gos_service.my_completed.api");
const userMail = require("./api/user.mail.api");

const region = require("./api/district.api");

const directory_menu = require("./api/person.menu.api");
const directory_users = require("./api/user.directory.users.api");
const directory_services = require("./api/user.directory.service.api");
const directory_roles = require("./api/user.directory.roles.api");
//админская фигня
const admin_user = require("./api/admin.users.api");
const admin_role = require("./api/admin.role.api");
const admin_organization = require("./api/admin.organization.api");
const admin_work_day = require("./api/admin.workDay.api");
const admin_ads = require("./api/admin.ads.api");
const admin_layer = require("./api/admin.layer.api");

const router = Router();
router.use(cors());
router.use(controllerAuth.user);
router.use("/auth", auth); //роут не требующий токена
router.use("/users", users); // роут пользователей
router.use("/service", land_relations); // Земельные услуги
router.use("/city", city); //районы
router.use("/statement", statement); //заявление
router.use("/statementInfo", statementInfo); //info о заявителе
router.use("/ecp", ecp); //авторизация по эцп
router.use("/gos/received", gos_received); //гос услуги поступившие
router.use("/gos/execution", gos_execution); //гос услуги поступившие
router.use("/gos/completed", gos_completed); //гос услуги завершеные
router.use("/task/execution", gos_execution_task);
router.use("/task/completed", gos_completed_task); //гос услуги
router.use("/mail", userMail); //отпарвка сообщений
router.use("/directory/users", directory_users); //справочник пользователи
router.use("/directory/services", directory_services); //справочник услуг
router.use("/directory/roles", directory_roles); //справочник ролей
router.use("/region", region);
//админка
router.use("/admin/users", admin_user); // пользователи
router.use("/admin/role", admin_role); // Роли
router.use("/admin/organization", admin_organization); // оранизаций
router.use("/admin/workDay", admin_work_day); //рабочие дни
router.use("/admin/ads", admin_ads); //обьявление
router.use("/admin/layer", admin_layer); //слой

//меню личного кабинета
router.use("/personmenu", directory_menu);

//земельные отношения 2.0
router.use("/relation", require("./api/relation/api"));
//архитектура
//router.use((req, res, next) => console.log(req.url));
router.use("/architecture", require("./api/arc/api"));

//mongo
router.use("/mongo/chunks", require("./api/mongo/fs.chunks.controller"));
router.use("/mongo/files", require("./api/mongo/fs.files.controller"));
module.exports = router;
