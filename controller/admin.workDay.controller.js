const Model = require("../model/admin.workDay.model");
class Controller {
  async findAll(req, res) {
    //получение всех рабочих дней
    const workDay = await Model.findAll();
    return res.json(workDay);
  }
  async findOne(req, res) {
    // получение рабочих дня по id
    const workDay = await Model.findByPk(req.params.id);
    return res.json(workDay);
  }
  async create(req, res) {
    // создание рабочих дня
    try {
      const candidate = await Model.findOne({ where: { date: req.body.date } });
      if (candidate) return res.json({ error: "Логин занят" });
      const workDay = await Model.create({ ...req.body });
      return res.json(workDay);
    } catch (e) {
      console.log(e);
      return res.json({ error: "не все поля заполены" });
    }
  }
  async update(req, res) {
    // редактирование рабочих дня
    const workDay = await Model.update({ ...req.body }, { where: { id: req.params.id } });
    return res.json(workDay);
  }
  async delete(req, res) {
    // удаление по id
    const workDay = await Model.destroy({ where: { id: req.params.id } });
    return res.json(workDay);
  }
}

module.exports = new Controller();
