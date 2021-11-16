const Model = require("../model/statement.info.model");

class Controller {
  async add(req, res) {
    try {
      //создание заявления
      const model = await Model.create({ ...req.body });
      return res.json(model);
    } catch (e) {
      console.log(e);
      return res.json({ error: "не все поля запонены или что то пошло не так" });
    }
  }
  async get(req, res) {
    //получение всех заявлений
    const model = await Model.findAll();
    return res.json(model);
  }
  async getOne(req, res) {
    //get info
    const { id } = req.params;
    const model = await Model.findByPk(id);
    return res.json(model);
  }
}
module.exports = new Controller();
