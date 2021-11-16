const { DataTypes } = require("sequelize");
const sequelize = require("../pg.config");
const admin_role = sequelize.define(
  "admin_role",
  {
    id: { type: DataTypes.INTEGER, unique: true, autoIncrement: true, primaryKey: true },
    value: { type: DataTypes.STRING, unique: true, allowNull: false },
    description_ru: { type: DataTypes.TEXT },
    description_kz: { type: DataTypes.TEXT },
    description_en: { type: DataTypes.TEXT },
  },
  {}
);
admin_role.sync();
module.exports = admin_role;
