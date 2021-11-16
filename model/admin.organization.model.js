const { DataTypes } = require("sequelize");
const sequelize = require("../pg.config");

const admin_organization = sequelize.define(
  "admin_organization",
  {
    id: { type: DataTypes.INTEGER, unique: true, autoIncrement: true, primaryKey: true },
    //Название организаций
    name: { type: DataTypes.STRING, unique: true, allowNull: false },
    //Сокращение
    reduction: { type: DataTypes.STRING, allowNull: true },
    //Потверждение пользователей, без понятие что это ¯\_(ツ)_/¯
    confirmation: { type: DataTypes.STRING, allowNull: true },
    //Комунальное
    communal: { type: DataTypes.STRING, allowNull: true },
    //Тип организаций
    type: { type: DataTypes.STRING, allowNull: false },
    //Район организаций
    region: { type: DataTypes.STRING, allowNull: false },
  },
  {}
);
admin_organization.sync();
module.exports = admin_organization;
