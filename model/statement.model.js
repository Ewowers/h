const { DataTypes } = require("sequelize");
const sequelize = require("../pg.config");
const Statement = sequelize.define(
  "statement",

  {
    id: {
      type: DataTypes.INTEGER,
      unique: true,
      autoIncrement: true,
      primaryKey: true,
    },
    surname: {
      //Фамилия
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      //Имя
      type: DataTypes.STRING,
      allowNull: false,
    },
    patronymic: {
      //Очество
      type: DataTypes.STRING,
      allowNull: true,
    },
    iinApplicant: {
      //ИИН Заявителя
      type: DataTypes.STRING,
      allowNull: false,
    },
    applicantAddress: {
      //Адресс заявителя
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      //Телефона заявителя
      type: DataTypes.STRING,
      allowNull: false,
    },
    //заявитель заказчик или нет
    customerType: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    //физическое лицо
    customerInn: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    customerFullName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    customer: {
      type: DataTypes.STRING,
    },
    //юридическое лицо
    customerBin: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    customerNameOrganization: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {}
);
Statement.sync();
module.exports = Statement;
