const { DataTypes } = require("sequelize");
const sequelize = require("../pg.config");

const district = sequelize.define(
  "regions",
  {
    id: { type: DataTypes.INTEGER, unique: true, autoIncrement: true, primaryKey: true },
    children: { type: DataTypes.ARRAY(DataTypes.JSON) },
    localityNameKk: { type: DataTypes.STRING },
    localityNameRu: { type: DataTypes.STRING },
    nameEn: { type: DataTypes.STRING },
    nameKk: { type: DataTypes.STRING },
    nameRu: { type: DataTypes.STRING },
  },
  {}
);
district.sync();
module.exports = district;
