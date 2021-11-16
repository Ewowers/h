const { DataTypes } = require("sequelize");
const sequelize = require("../pg.config");

const mail = sequelize.define(
  "user_mail",
  {
    id: { type: DataTypes.INTEGER, unique: true, autoIncrement: true, primaryKey: true },
    userId: {
      //отправитель
      type: DataTypes.STRING,
      allowNull: false,
    },
    userName: {
      //имя отправителя
      type: DataTypes.STRING,
      allowNull: false,
    },
    from: {
      //получатель
      type: DataTypes.STRING,
      allowNull: false,
    },
    message: {
      //Письма
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {}
);
mail.sync();
module.exports = mail;
