const { DataTypes } = require("sequelize");
const sequelize = require("../../pg.config");

const Plan = sequelize.define(
  "architecture-plan",
  {
    id: { type: DataTypes.INTEGER, unique: true, autoIncrement: true, primaryKey: true },
    lastName: { type: DataTypes.STRING }, //Фамилия
    firstName: { type: DataTypes.STRING }, //Имя
    secondName: { type: DataTypes.STRING }, // Очество
    address: { type: DataTypes.STRING }, //Адресс
    phone: { type: DataTypes.STRING }, //Телефон
    userId: { type: DataTypes.INTEGER }, //id пользователья
    username: { type: DataTypes.STRING }, //логин пользователя
    //objectiinfo
    name: { type: DataTypes.STRING }, //Найменование объекта
    cadastreNumber: { type: DataTypes.STRING }, //Кадастровый номер
    //file
    upload: { type: DataTypes.TEXT },
  },
  {}
);
Plan.sync();
module.exports = Plan;
