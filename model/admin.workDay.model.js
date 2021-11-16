const { DataTypes } = require("sequelize");
const sequelize = require("../pg.config");

const admin_workDay = sequelize.define(
  "admin_workDay",
  {
    id: { type: DataTypes.INTEGER, unique: true, autoIncrement: true, primaryKey: true },
    //Дата
    date: { type: DataTypes.DATE, unique: true, allowNull: false },
    //Рабочий ден // да нет
    day: { type: DataTypes.BOOLEAN, allowNull: false },
  },
  {}
);
admin_workDay.sync();
module.exports = admin_workDay;
