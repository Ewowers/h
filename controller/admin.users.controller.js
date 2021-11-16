const Model = require("../model/admin.users.model");
class Controller {
  async findAll(req, res) {
    //получение всех пользователей
    const users = await Model.findAll();
    return res.json(users);
  }
  async findOne(req, res) {
    // получение пользователя по id
    const user = await Model.findByPk(req.params.id);
    return res.json(user);
  }
  async create(req, res) {
    // создание пользователя
    try {
      const candidate = await Model.findOne({ where: { username: req.body.username } });
      if (candidate) return res.json({ error: "Логин занят" });
      const user = await Model.create({ ...req.body });
      return res.json(user);
    } catch (e) {
      console.log(e);
      return res.json({ error: "не все поля заполены" });
    }
  }
  async update(req, res) {
    // редактирование пользователя
    const user = await Model.update({ ...req.body }, { where: { id: req.params.id } });
    return res.json(user);
  }
  async delete(req, res) {
    // удаление по id
    const user = await Model.destroy({ where: { id: req.params.id } });
    return res.json(user);
  }
}

module.exports = new Controller();
