const Model = require("../model/gos_service.received.model");
class Controller {
  async add(req, res) {
    //создать
    try {
      req.body.start_date = new Date(req.body.start_date);
      req.body.end_date = new Date(req.body.end_date);
      const model = await Model.create({ ...req.body });
      return res.json({ model });
    } catch (e) {
      console.log(e);
      return res.json({ error: "Что то пошло не так" });
    }
  }
  async put(req, res) {
    //изменить
    try {
      const { id } = req.params;
      console.log(id);
      // const model = await Model.findOne({ where: { _id: id } });
      const model = await Model.update(
        {
          ...req.body,
        },
        { where: { _id: id } }
      );
      return res.json(model);
    } catch (e) {
      console.log(e);
      return res.json({ error: "Что то пошло не так" });
    }
  }
  async delete(req, res) {
    //удалить
    const { id } = req.params;
    const model = await Model.destroy({ where: { _id: id } });
    return res.json(model);
  }
  async get(req, res) {
    //получить базу
    const model = await Model.findAll();
    return res.json(model);
  }
  async getOne(req, res) {
    //получить базу по uuid
    const { id } = req.params;
    const model = await Model.findOne({ where: { _id: id } });
    return res.json(model);
  }
}
module.exports = new Controller();
