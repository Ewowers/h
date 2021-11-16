const { DataTypes } = require("sequelize");
const sequelize = require("../../pg.config");

const Sketch = sequelize.define(
  "architecture-sketch",
  {
    id: { type: DataTypes.INTEGER, unique: true, autoIncrement: true, primaryKey: true },
    //app
    lastName: { type: DataTypes.STRING }, //Фамилия
    firstName: { type: DataTypes.STRING }, //Имя
    secondName: { type: DataTypes.STRING }, // Очество
    address: { type: DataTypes.STRING }, //Адресс
    phone: { type: DataTypes.STRING }, //Телефон
    userId: { type: DataTypes.INTEGER }, //id пользователья
    username: { type: DataTypes.STRING }, //логин пользователя
    //objectInfo
    designer: { type: DataTypes.STRING }, //проектировщик
    licenseCategoryGsl: { type: DataTypes.STRING }, //Категория лицензий гсл
    licenseDateGsl: { type: DataTypes.STRING }, //Дата выдачи лицензий
    name: { type: DataTypes.STRING }, //Найменование объекта
    address: { type: DataTypes.STRING }, //Адресс объекта
    cadastreNumber: { type: DataTypes.STRING }, //Кадастровый номер
    //file
    upload: { type: DataTypes.TEXT }, //файлы в base64
  },
  {}
);
Sketch.sync();
module.exports = Sketch;
