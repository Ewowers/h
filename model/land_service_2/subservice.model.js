const { DataTypes, Sequelize } = require("sequelize");
const sequelize = require("../../pg.config");

const subservice = sequelize.define(
  "subservice",
  {
    id: { type: DataTypes.INTEGER, unique: true, autoIncrement: true, primaryKey: true },
    code: { type: DataTypes.STRING },
    communals: { type: DataTypes.STRING },
    days: { type: DataTypes.INTEGER },
    nameEn: { type: DataTypes.STRING },
    nameKk: { type: DataTypes.STRING },
    nameRu: { type: DataTypes.STRING },
    priority: { type: DataTypes.STRING },
  },
  {}
);
subservice.sync();

module.exports = subservice;
