const { DataTypes, Sequelize } = require("sequelize");
const sequelize = require("../../pg.config");

const land_info = sequelize.define(
  "relation-change-app",
  {
    id: { type: DataTypes.INTEGER, unique: true, autoIncrement: true, primaryKey: true },
    lastName: { type: DataTypes.STRING }, //Фамилия
    firstName: { type: DataTypes.STRING }, //Имя
    secondName: { type: DataTypes.STRING }, // Очество
    address: { type: DataTypes.STRING }, //Адресс
    phone: { type: DataTypes.STRING }, //Телефон
    userId: { type: DataTypes.INTEGER, allowNull: false }, //id пользователья
  },
  {}
);
land_info.sync();
module.exports = land_info;
