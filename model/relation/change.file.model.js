const { DataTypes, Sequelize } = require("sequelize");
const sequelize = require("../../pg.config");

const objectInfo = sequelize.define(
  "relation-change-file",
  {
    id: { type: DataTypes.INTEGER, unique: true, autoIncrement: true, primaryKey: true },
    upload: { type: DataTypes.TEXT, allowNull: false },
    userId: { type: DataTypes.INTEGER, allowNull: false }, //id пользователья
  },
  {}
);
objectInfo.sync();
module.exports = objectInfo;
