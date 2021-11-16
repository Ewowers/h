const Model = require("../model/user.directory.roles.model");
class Controller {
  async add(req, res) {
    const { id } = req.params;
    const model = await Model.create({ ...req.body, userId: id });
    return res.json(model);
  }
  async get(req, res) {
    const { id } = req.params;
    const model = await Model.findAll({ where: { userId: id } });
    return res.json(model);
  }
  async getOne(req, res) {
    const { id, userId } = req.params;
    const model = await Model.findOne({ where: { userId, id } });
    return res.json(model);
  }
  async put(req, res) {
    const { id, userId } = req.params;
    const model = await Model.findOne({ ...req.body }, { where: { userId, id } });
    return res.json(model);
  }
}

module.exports = new Controller();
