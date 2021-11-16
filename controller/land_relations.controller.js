const { land_relations, architecture_and_urban_planning, support_for_business } = require("../model/land_relations.mode");
class Land {
  async getLand(req, res) {
    // получение всех ЗЕМЕЛЬНЫЕ ОТНОШЕНИЯ
    let test = await land_relations.findAll();
    let arrRu = [
      "Утверждение землеустроительных проектов",
      "Выдача решения на изменение целевого назначения земельного участка",
      "Приобретение прав на земельные участки, которые находятся в государственной собственности, на торгах (конкурсах, аукционах)    ",
      "Предоставление ЗУ через торги",
    ];
    let arrKz = [
      "Жерді қалыптастыру үшін жерге орналастыру жобаларын бекіту",
      "Жер учаскесінің нысаналы мақсатын өзгертуге шешім беру",
      "Мемлекеттік меншіктегі жер учаскелеріне құқықтарды сауда-саттықта (конкурстарда, аукциондарда) сатып алу)",
      "Предоставление ЗУ через торги",
    ];
    if (test.length === 0) {
      for (let i = 0; i <= arrRu.length; i++) {
        await land_relations.create({ title_ru: arrRu[i], title_kz: arrKz[i] });
      }
    }
    const land = await land_relations.findAll({});

    return res.json(land);
  }
  async addLand(req, res) {
    // создание ЗЕМЕЛЬНЫЕ ОТНОШЕНИЯ
    const newLand = await land_relations.create({ ...req.body });
    return res.json({ newLand });
  }

  async getArchitecture(req, res) {
    // получение всех АРХИТЕКТУРА И ГРАДОСТРОИТЕЛЬСТВО
    let test = await architecture_and_urban_planning.findAll();
    let arrRu = [
      "Предоставление исходных материалов при разработке проектов строительства и реконструкции (перепланировки и переоборудования)",
      "Согласование эскизного проекта",
      "Регистрация акта приемки построенного объекта, Согласование топографической съёмки инженерной коммуникации",
      "Выдача копии топографического плана",
      "Выдача справки по определению адреса объектов недвижимости на территории Республики Казахстан",
    ];
    let arrKz = [
      "Құрылыс жобаларын әзірлеу және реконструкциялау (қайта жоспарлау, қайта жабдықтау) үшін бастапқы материалдарды беру",
      "Нобайлық жобаны келісу",
      "Құрылысы аяқталған объектілердің қабылдау актісін тіркеу. Инженерлік коммуникацияның топографиялық түсірілімін келісу",
      "Топографиялық жоспардың көшірмесін беру",
      "Қазақстан Республикасы аумағында жылжымайтын мүлік объектілерінің мекен жайын айқындау бойынша анықтама беру",
    ];
    if (test.length === 0) {
      for (let i = 0; i <= arrRu.length; i++) {
        await architecture_and_urban_planning.create({ title_ru: arrRu[i], title_kz: arrKz[i] });
      }
    }
    const land = await architecture_and_urban_planning.findAll({});
    return res.json(land);
  }
  async addArchitecture(req, res) {
    // создание АРХИТЕКТУРА И ГРАДОСТРОИТЕЛЬСТВО
    const newLand = await architecture_and_urban_planning.create({ ...req.body });
    return res.json({ newLand });
  }

  async getSupport(req, res) {
    // получение всех АРХИТЕКТУРА И ГРАДОСТРОИТЕЛЬСТВО
    const land = await support_for_business.findAll({});
    return res.json(land);
  }
  async addSupport(req, res) {
    // создание АРХИТЕКТУРА И ГРАДОСТРОИТЕЛЬСТВО
    const newLand = await support_for_business.create({ ...req.body });
    return res.json({ newLand });
  }
}
module.exports = new Land();
