const { DataTypes } = require("sequelize");
const sequelize = require("../pg.config");

const admin_ads = sequelize.define(
  "admin_ads",
  {
    id: { type: DataTypes.INTEGER, unique: true, autoIncrement: true, primaryKey: true },
    //Найменование
    name: { type: DataTypes.STRING, unique: true, allowNull: false },
    //Текст
    text: { type: DataTypes.TEXT, allowNull: false },
    //Дата публикация
    date_start: { type: DataTypes.DATE, allowNull: false },
    //Дата окончания
    date_end: { type: DataTypes.DATE, allowNull: false },
  },
  {}
);
admin_ads.sync();
module.exports = admin_ads;
