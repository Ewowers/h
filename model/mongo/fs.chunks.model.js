const { DataTypes } = require("sequelize");
const sequelize = require("../../pg.config");

const chunks = sequelize.define(
  "fs-chunks",
  {
    id: { type: DataTypes.INTEGER, unique: true, autoIncrement: true, primaryKey: true },
    //Найменование
    _id: { type: DataTypes.STRING },
    files_id: { type: DataTypes.STRING },
    n: { type: DataTypes.INTEGER },
    data: { type: DataTypes.TEXT },
  },
  {}
);
chunks.sync();
module.exports = chunks;
