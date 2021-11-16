const Model = require("../model/user.model");
const ip = require("ip");
class Controller {
  async findAll(req, res) {
    //получение всех пользователей
    const users = await Model.findAll();
    return res.json(users);
  }
  async roles(req, res) {
    //получение всех ролей
    const roles = await Roles.findAll();
    return res.json(roles);
  }
  async findType(req, res) {
    //получение определенных ролей
    const users = await Model.findAll({ where: { role: req.params.role } });
    return res.json(users);
  }
  async findOne(req, res) {
    //получение одного пользователя
    if (!req.params.id || req.params.id === "undefined") return res.end();
    const user = await Model.findOne({ where: { uuid: req.params.id } });
    if (!user) return res.end();
    return res.json(user);
  }
  async update(req, res) {
    //изменение пользователю по id
    const user = await Model.update({ ...req.body }, { where: { id: req.params.id } });
    return res.json(user);
  }
  async delete(req, res) {
    //удаление пользователя
    const user = await Model.destroy({ where: { id: req.params.id } });
    return res.json(user);
  }
  async create(req, res) {
    //создание пользователя
    const candidate = await Model.findOne({ where: { username: req.body.username } });
    if (candidate) return res.json({ error: "Логин занят" });
    const candidateEmail = await Model.findOne({ where: { email: req.body.email } });
    if (candidateEmail) return res.json({ error: "почта занята" });
    const user = Model.create({ ...req.body, ip: ip.address(), active: true });
    return res.end();
  }
  async createRole(req, res) {
    //создание роли
    console.log(req.body);
    const candidate = await Roles.findOne({ where: { value: req.body.value } });
    if (candidate) return res.json({ error: "звание занято" });
    const role = await Roles.create({ ...req.body });
    return res.end();
  }
}
module.exports = new Controller();
