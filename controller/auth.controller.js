const User = require("../model/user.model");
const config = require("config");
const jwt = require("jsonwebtoken");
const ip = require("ip");

const sing = (id) => {
  const token = jwt.sign({ id: id }, config.get("jwt"), { expiresIn: "1440h" });
  return token;
};
const verify = (access) => {
  const token = jwt.verify(access, config.get("jwt"));
  return token.id;
};
class Controller {
  async auth(req, res) {
    //авторизация
    console.log("auth");
    try {
      const { username, password } = req.body;
      const user = await User.findOne({ where: { username } });
      if (!user) return res.json({ error: "пользователь не найден" });
      if (user.password !== password) return res.json({ error: "пороль не верный" });
      return res.json({ token: sing(user.id), uuid: user.uuid });
    } catch (e) {
      console.log(e);
    }
  }
  async regist(req, res) {
    //регистрация
    console.log(req.body);

    const { username } = req.body;
    const candidateName = await User.findOne({ where: { username } });
    if (candidateName) return res.json({ error: "логин занят" });
    const user = await User.create({ ...req.body });
    const token = await sing(user.id);
    return res.json({ token, uri: user.role === "admin" ? "admin" : "user" });
  }
  async active(req, res) {
    const { id } = req.params;
    await User.update({ active: true }, { where: { id: id } });
    res.send("<h1>Вашь аккаунт активирован</h1>");
  }
  async onload(req, res) {
    const admin = await User.findOne({ where: { username: "admin" } });
    const access = req.body.id;
    if (!access || access === "null") {
      req.user = null;
      return res.json({ error: true });
    }
    const id = verify(access, config.get("jwt"));
    if (!id) {
      req.user = null;
      return res.json({ error: true });
    }
    const user = await User.findByPk(id);
    if (!user.active) return res.json({ error: true });
    req.user = user;
    req.role = user.import >= 3;
    return res.json({ uri: user.role === "admin" ? "admin" : "user" });
  }
  async user(req, res, next) {
    const access = req.headers["token"];
    if (!access || access === "null") {
      req.user = null;
      return next();
    }
    const id = verify(access, config.get("jwt"));
    if (!id) {
      req.user = null;
      return next();
    }
    const user = await User.findByPk(id);
    req.user = user;
    // req.role = user.import >= 3;
    return next();
  }
}
module.exports = new Controller();
