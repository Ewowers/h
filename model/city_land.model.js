const { DataTypes } = require("sequelize");
const sequelize = require("../pg.config");

const city = sequelize.define(
  "city",
  {
    id: { type: DataTypes.INTEGER, unique: true, autoIncrement: true, primaryKey: true },
    title_ru: { type: DataTypes.STRING, allowNull: false, unique: true }, //название города
    title_kz: { type: DataTypes.STRING, allowNull: false, unique: true },
  },
  {}
);
city.sync();
module.exports = city;
