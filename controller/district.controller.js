const Region = require("../model/district.model");

class Controller {
  async get(req, res) {
    //получение всех городов
    const region = await Region.findAll();
    if (region.length === 0) {
      let arr = [
        {
          children: [
            { children: null, localityNameKk: "Атырау қ.", localityNameRu: "г. Атырау", nameEn: null, nameKk: "Атырау қ.", nameRu: "г. Атырау" },
            {
              children: null,
              localityNameKk: "Ақсай ауылдық округі",
              localityNameRu: "Аксайский сельский округ",
              nameEn: null,
              nameKk: "Ақсай ауылдық округі",
              nameRu: "Аксайский сельский округ",
            },
            {
              children: null,
              localityNameKk: "Дамбы ауылдық округі",
              localityNameRu: "Дамбинский сельский округ",
              nameEn: null,
              nameKk: "Дамбы ауылдық округі",
              nameRu: "Дамбинский сельский округ",
            },
            {
              children: null,
              localityNameKk: "Еркінқала ауылдық округі",
              localityNameRu: "Еркинкалинский сельский округ",
              nameEn: null,
              nameKk: "Еркінқала ауылдық округі",
              nameRu: "Еркинкалинский сельский округ",
            },
            {
              children: null,
              localityNameKk: "Қайыршақты ауылдық округі",
              localityNameRu: "Каиршахтинский сельский округ",
              nameEn: null,
              nameKk: "Қайыршақты ауылдық округі",
              nameRu: "Каиршахтинский сельский округ",
            },
            {
              children: null,
              id: 15,
              localityNameKk: "Кеңөзек ауылдық округі",
              localityNameRu: "Кенузекский сельский округ",
              nameEn: null,
              nameKk: "Кеңөзек ауылдық округі",
              nameRu: "Кенузекский сельский округ",
            },
            {
              children: null,
              localityNameKk: "Алмалы ауылдық округі",
              localityNameRu: "Алмалинский сельский округ",
              nameEn: null,
              nameKk: "Алмалы ауылдық округі",
              nameRu: "Алмалинский сельский округ",
            },
          ],
          localityNameKk: "Атырау қаласы",
          localityNameRu: "город Атырау",
          nameEn: null,
          nameKk: "Атырау қаласы",
        },
        { children: [], localityNameKk: "Құлсары", localityNameRu: "Кульсары", nameEn: null, nameKk: "Жылыой ауданы", nameRu: "Жылыойский район" },
        { children: [], localityNameKk: "Индербор", localityNameRu: "Индерборский", nameEn: null, nameKk: "Индер ауданы", nameRu: "Индерский район" },
        { children: [], localityNameKk: "Аққыстау", localityNameRu: "Аккистау", nameEn: null, nameKk: "Исатай ауданы", nameRu: "Исатайский район" },
        { children: [], localityNameKk: "Миялы", localityNameRu: "Миялы", nameEn: null, nameKk: "Қызылқоға ауданы", nameRu: "Кзылкогинский район" },
        {
          children: [],
          localityNameKk: "Құрманғазы",
          localityNameRu: "Курмангазы",
          nameEn: null,
          nameKk: "Құрманғазы ауданы",
          nameRu: "Курмангазинский район",
        },
        { children: [], localityNameKk: "Мақат", localityNameRu: "Макат", nameEn: null, nameKk: "Мақат ауданы", nameRu: "Макатский район" },
        { children: [], localityNameKk: "Махамбет", localityNameRu: "Махамбет", nameEn: null, nameKk: "Махамбет ауданы", nameRu: "Махамбетский район" },
      ];
      for (let index = 0; index < arr.length; index++) {
        await Region.create({ ...arr[index] });
      }
    }
    const reg = await Region.findAll();
    return res.json(reg);
  }
  async add(req, res) {
    //создание города
    const region = await Region.create({ ...req.body });
    return res.json(region);
  }
}
module.exports = new Controller();
