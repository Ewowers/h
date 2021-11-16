const Model = require("../model/person.menu.model");

class Controller {
  async findAll(req, res) {
    //получение всех списка
    //
    let model = await Model.findAll();

    let acces = { acces: [] };
    for (let i in model) {
      acces[model[i].title] = model[i].num;
      acces.acces.push(model[i].title);
    }
    return res.json(acces);
  }
  async findOne(req, res) {
    //получение одного списка
    const model = await Model.findByPk(req.params.id);
    return res.json(model);
  }
  async update(req, res) {
    //изменение списка по id
    const model = await Model.update({ ...req.body }, { where: { id: req.params.id } });
    return res.json(model);
  }
  async delete(req, res) {
    //удаление списка
    const model = await Model.destroy({ where: { id: req.params.id } });
    return res.json(model);
  }
  async create(req, res) {
    //создание списка
    const candidate = await Model.findOne({ where: { title: req.body.title } });
    if (candidate) return res.json({ error: "Title занято" });
    const model = await Model.create({ ...req.body });
    return res.json(model);
  }
}
module.exports = new Controller();
