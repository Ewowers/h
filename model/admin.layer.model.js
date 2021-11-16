const { DataTypes } = require("sequelize");
const sequelize = require("../pg.config");

const admin_layer = sequelize.define(
  "admin_layer",
  {
    id: { type: DataTypes.INTEGER, unique: true, autoIncrement: true, primaryKey: true },
    //Рег.Номер
    regNum: { type: DataTypes.STRING, allowNull: false },
    //comSvcType, без понятие что это ¯\_(ツ)_/¯
    comSvcType: { type: DataTypes.TEXT, allowNull: false },
    //Описание наверноею. description написанно
    description: { type: DataTypes.DATE, allowNull: false },
    //вообще без понятия ¯\_(ツ)_/¯
    esisOwner: { type: DataTypes.DATE, allowNull: false },
  },
  {}
);
admin_layer.sync();
module.exports = admin_layer;
