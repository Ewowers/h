const { DataTypes, Sequelize } = require("sequelize");
const sequelize = require("../../pg.config");

const service = sequelize.define(
  "service",
  {
    id: { type: DataTypes.INTEGER, unique: true, autoIncrement: true, primaryKey: true },
    code: { type: DataTypes.STRING },
    nameEn: { type: DataTypes.STRING },
    nameKk: { type: DataTypes.STRING },
    nameRu: { type: DataTypes.STRING },
    serviceTypeId: { type: DataTypes.STRING },
    shortNameEn: { type: DataTypes.STRING },
    shortNameKk: { type: DataTypes.STRING },
    shortNameRu: { type: DataTypes.STRING },
    shortNameEn: { type: DataTypes.STRING },
    shortNameKk: { type: DataTypes.STRING },
    shortNameRu: { type: DataTypes.STRING },
    signingOrgs: { type: DataTypes.STRING },
    tags: { type: DataTypes.STRING },
    workdaysOnly: { type: DataTypes.STRING },
    toSign: { type: DataTypes.STRING },
    waterInfo: { type: DataTypes.STRING },
  },
  {}
);
service.sync();

module.exports = service;
