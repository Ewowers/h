const { DataTypes } = require("sequelize");
const sequelize = require("../pg.config");

const gos_service_my_completed = sequelize.define(
  "gos_service_my_completed",
  {
    id: { type: DataTypes.INTEGER, unique: true, autoIncrement: true, primaryKey: true },
    userId: {
      // uuid испольнителя
      type: DataTypes.STRING,
      allowNull: false,
    },
    userName: {
      // логин пользователя
      type: DataTypes.STRING,
      allowNull: false,
    },
    region: {
      //регион
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    start_date: {
      //Дата поступления
      type: DataTypes.DATE,
      allowNull: false,
    },
    applicant: {
      //заявитель
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      //тип запроса
      type: DataTypes.STRING,
      allowNull: false,
    },
    task: {
      //задача
      type: DataTypes.STRING,
      allowNull: false,
    },
    date_end: {
      //срок исполнения
      type: DataTypes.STRING,
      allowNull: false,
    },
    date_execution: {
      //Дата получения
      type: DataTypes.DATE,
      allowNull: false,
    },
    date_completed: {
      //дата завершения
      type: DataTypes.DATE,
      allowNull: false,
    },
    status: {
      //статус
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {}
);
gos_service_my_completed.sync();
module.exports = gos_service_my_completed;
