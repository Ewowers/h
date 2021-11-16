const { DataTypes, Sequelize } = require("sequelize");
const sequelize = require("../../pg.config");

const land_info = sequelize.define(
  "landInfo",
  {
    id: { type: DataTypes.INTEGER, unique: true, autoIncrement: true, primaryKey: true },
    copyCount: { type: DataTypes.STRING },
    firstName: { type: DataTypes.STRING },
    lastName: { type: DataTypes.STRING },
    mioDate: { type: DataTypes.STRING },
    mioNumber: { type: DataTypes.STRING },
    orgName: { type: DataTypes.STRING },
    protocolDate: { type: DataTypes.DATE },
    protocolNumber: { type: DataTypes.STRING },
    secondName: { type: DataTypes.STRING },
    landSelectionAgreement: { type: DataTypes.STRING },
    lastName: { type: DataTypes.STRING },
    mapImage: { type: DataTypes.STRING },
    newAddress: { type: DataTypes.STRING },
    numeration: { type: DataTypes.STRING },
    numerationDate: { type: DataTypes.STRING },
  },
  {}
);
land_info.sync();
module.exports = land_info;
