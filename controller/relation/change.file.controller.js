const Model = require("../../model/relation/change.file.model");
class Controller {
  async create(req, res) {
    const model = await Model.create({ upload: JSON.stringify(req.body), userId: req.user.id });
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
