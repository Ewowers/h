const { DataTypes } = require("sequelize");
const sequelize = require("../../../pg.config");

const Providing = sequelize.define(
  "architecture-propertyRefences-clarification-file",
  {
    id: { type: DataTypes.INTEGER, unique: true, autoIncrement: true, primaryKey: true },
    upload: { type: DataTypes.TEXT },
    userId: { type: DataTypes.INTEGER }, //id пользователья
  },
  {}
);
Providing.sync();
module.exports = Providing;
