const Model = require("../model/admin.role.model");
class Controller {
  async findAll(req, res) {
    //получение всех ролей
    const role = await Model.findAll();
    return res.json(role);
  }
  async findOne(req, res) {
    // получение ролей по id
    const role = await Model.findByPk(req.params.id);
    return res.json(role);
  }
  async create(req, res) {
    // создание ролей
    try {
      const candidate = await Model.findOne({ where: { value: req.body.value } });
      if (candidate) return res.json({ error: "Логин занят" });
      const role = await Model.create({ ...req.body });
      return res.json(role);
    } catch (e) {
      console.log(e);
      console.log(e);
      return res.json({ error: "не все поля заполены" });
    }
  }
  async update(req, res) {
    // редактирование ролей
    const role = await Model.update({ ...req.body }, { where: { id: req.params.id } });
    return res.json(role);
  }
  async delete(req, res) {
    // удаление по id
    const role = await Model.destroy({ where: { id: req.params.id } });
    return res.json(role);
  }
}

module.exports = new Controller();
