const Model = require("../../model/mongo/fs.chunks.model");
class Controller {
  async findAll(req, res) {
    const model = await Model.findAll();
    return res.json(model);
  }
  async findOne(req, res) {
    const model = await Model.findByPk(req.params.id);
    return res.json(model);
  }
}
module.exports = new Controller();
