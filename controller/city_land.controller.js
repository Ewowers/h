const City = require("../model/city_land.model");
class Controller {
  async get(req, res) {
    //получение всех городов
    const test = await City.findOne({ title_ru: "городАтырау" });
    if (!test) {
      let arr = `город Атырау,Атырау қаласы
    |Жылыойсий район,Жылыой ауданы
    |Индерсий район,Индерс ауданы
    |Исатайский район,Исатай ауданы
    |Кзылкогинский район,Қызылқоға ауданы
    |Курмангазиский район,Құрманғазы ауданы
    |Макатский район,Мақат ауданы
    |Махамбетский район,Махамбет ауданы`;
      arr.split("|").forEach(async (item) => {
        let ru = item.split(",")[0];
        let kz = item.split(",")[1];
        await City.create({ title_ru: ru, title_kz: kz });
      });
    }
    const city = await City.findAll();
    return res.json(city);
  }
  async add(req, res) {
    //создание города
    const city = await City.create({ ...req.body });
    return res.json(city);
  }
}
module.exports = new Controller();
