const Model = require("../model/user.mail.model");
class Controller {
  async add(req, res) {
    try {
      const { id } = req.params;

      console.log(id);
      const model = await Model.create({ ...req.body, userId: id });
      return res.json(model);
    } catch (e) {
      console.log(e);
    }
  }
  async getMy(req, res) {
    const { id } = req.params;
    const model = await Model.findAll({ where: { userId: id } });
    return res.json(model);
  }
  async getOne(req, res) {
    const { id } = req.params;
    const model = await Model.findOne({ where: { id } });
    return res.json(model);
  }
}
module.exports = new Controller();
