const Model = require("../model/admin.organization.model");
class Controller {
  async findAll(req, res) {
    //получение всех организаций
    const organization = await Model.findAll();
    return res.json(organization);
  }
  async findOne(req, res) {
    // получение организаций по id
    const organization = await Model.findByPk(req.params.id);
    return res.json(organization);
  }
  async create(req, res) {
    // создание организаций
    try {
      console.log(req.body);
      const candidate = await Model.findOne({ where: { name: req.body.name } });
      if (candidate) return res.json({ error: "Логин занят" });
      const organization = await Model.create({ ...req.body });
      return res.json(organization);
    } catch (e) {
      console.log(e);
      return res.json({ error: "не все поля заполены" });
    }
  }
  async update(req, res) {
    // редактирование организаций
    const organization = await Model.update({ ...req.body }, { where: { id: req.params.id } });
    return res.json(organization);
  }
  async delete(req, res) {
    // удаление по id
    const useorganizationr = await Model.destroy({ where: { id: req.params.id } });
    return res.json(organization);
  }
}

module.exports = new Controller();
