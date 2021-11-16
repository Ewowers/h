const Model = require("../model/admin.ads.model");
class Controller {
  async findAll(req, res) {
    //получение всех обьявлений
    const ads = await Model.findAll();
    return res.json(ads);
  }
  async findOne(req, res) {
    // получение обьявлений по id
    const ads = await Model.findByPk(req.params.id);
    return res.json(ads);
  }
  async create(req, res) {
    // создание обьявлений
    try {
      const candidate = await Model.findOne({ where: { name: req.body.name } });
      if (candidate) return res.json({ error: "Логин занят" });
      const ads = await Model.create({ ...req.body });
      return res.json(ads);
    } catch (e) {
      console.log(e);
      console.log(e);
      return res.json({ error: "не все поля заполены" });
    }
  }
  async update(req, res) {
    // редактирование обьявлений
    const ads = await Model.update({ ...req.body }, { where: { id: req.params.id } });
    return res.json(ads);
  }
  async delete(req, res) {
    // удаление по id
    const ads = await Model.destroy({ where: { id: req.params.id } });
    return res.json(ads);
  }
}

module.exports = new Controller();
