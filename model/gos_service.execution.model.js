const { DataTypes, Sequelize } = require("sequelize");
const sequelize = require("../pg.config");

const gos_service_execution = sequelize.define(
  "gos_service_execution",
  {
    id: { type: DataTypes.INTEGER, unique: true, autoIncrement: true, primaryKey: true },
    _id: { type: DataTypes.UUID, defaultValue: Sequelize.UUIDV4 },
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
    iin_or_bin: {
      //иин или бин
      type: DataTypes.STRING,
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
    executor: {
      //испольнитель
      type: DataTypes.STRING,
      allowNull: false,
    },
    date_end: {
      //срок исполнения
      type: DataTypes.STRING,
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
gos_service_execution.sync();
module.exports = gos_service_execution;
