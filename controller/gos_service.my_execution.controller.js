const Model = require("../model/gos_service.my_execution.model");
class Controller {
  async add(req, res) {
    //создать
    try {
      const { id } = req.params;
      req.body.start_date = new Date(req.body.start_date);
      req.body.end_date = new Date(req.body.end_date);
      const model = await Model.create({ ...req.body, userId: id });
      return res.json({ model });
    } catch (e) {
      console.log(e);
      return res.json({ error: "Что то пошло не так" });
    }
  }

  async get(req, res) {
    //получить базу
    const { id } = req.params;
    const model = await Model.findAll({ where: { userId: id } });
    return res.json(model);
  }
  async getOne(req, res) {
    //получить базу по uuid
    const { id } = req.params;
    const model = await Model.findOne({ where: { id: id } });
    return res.json(model);
  }
}
module.exports = new Controller();
