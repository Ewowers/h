const Model = require("../../model/mongo/fs.files.model");
class Controller {
  async findAll(req, res) {
    const model = await Model.findAll();
    return res.json(model);
  }
}
module.exports = new Controller();
