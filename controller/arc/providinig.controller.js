const Model = require("../../model/arc/reconciliation.model");
class Controller {
  async create(req, res) {
    req.body.maxLoadByYears = JSON.stringify(req.body.maxLoadByYears);
    req.body.upload = JSON.stringify(req.body.upload);
    const model = await Model.create({ ...req.body, userId: req.user.id, username: req.user.username });
    console.log(req.body);
    return res.json(model);
  }
  async findAll(req, res) {
    const models = await Model.findAll();
    return res.json(models);
  }
  async findOne(req, res) {
    const model = await Model.findOne({ where: { id: req.params.id } });
    return res.json(model);
  }
  async update(req, res) {
    const model = await Model.update({ ...req.body }, { where: { id: req.params.id } });
    return res.json(model);
  }
  async remove(req, res) {
    const model = await Model.destroy({ where: { id: req.params.id } });
    return res.json(model);
  }
}
module.exports = new Controller();
