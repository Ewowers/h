const { DataTypes } = require("sequelize");
const sequelize = require("../../../pg.config");

const Providing = sequelize.define(
  "architecture-propertyRefences-clarification-app",
  {
    id: { type: DataTypes.INTEGER, unique: true, autoIncrement: true, primaryKey: true },
    lastName: { type: DataTypes.STRING }, //Фамилия
    firstName: { type: DataTypes.STRING }, //Имя
    secondName: { type: DataTypes.STRING }, // Очество
    address: { type: DataTypes.STRING }, //Адресс
    phone: { type: DataTypes.STRING }, //Телефон
    userId: { type: DataTypes.INTEGER }, //id пользователья
  },
  {}
);
Providing.sync();
module.exports = Providing;
