const Model = require("../model/ecp.model");
const jwt = require("jsonwebtoken");
const config = require("config");
const sing = (id) => {
  //создание токена
  return jwt.sign({ id }, config.get("jwt"), { expiresIn: "1440h" });
};
class Controller {
  async auth(req, res) {
    //авторизация
    try {
      const { iin, fullName } = req.body;
      const user = await Model.findOne({ where: { iin, fullName } });
      if (!user) return res.json({ error: "Не зареган" });
      return res.json({ token: sing(user.id) });
    } catch (e) {
      console.log(e);
      return res.json({ error: "что то пошло не так" });
    }
  }
  async create(req, res) {
    //создание
    const { inn, fullName } = req.body;
    const user = await Model.create({ inn, fullName });
    return res.json(user);
  }
}

module.exports = new Controller();
