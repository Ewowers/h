const Model = require("../model/admin.layer.model");
class Controller {
  async findAll(req, res) {
    //получение всех слоев
    const layer = await Model.findAll();
    return res.json(layer);
  }
  async findOne(req, res) {
    // получение слой по id
    const layer = await Model.findByPk(req.params.id);
    return res.json(layer);
  }
  async create(req, res) {
    // создание слоя
    try {
      console.log(req.body);
      const layer = await Model.create({ ...req.body });
      return res.json(layer);
    } catch (e) {
      console.log(e);
      console.log(e);
      return res.json({ error: "не все поля заполены" });
    }
  }
  async update(req, res) {
    // редактирование слоя
    const layer = await Model.update({ ...req.body }, { where: { id: req.params.id } });
    return res.json(layer);
  }
  async delete(req, res) {
    // удаление по id
    const layer = await Model.destroy({ where: { id: req.params.id } });
    return res.json(layer);
  }
}

module.exports = new Controller();
