const { DataTypes } = require("sequelize");
const sequelize = require("../pg.config");

const user_derictory_users = sequelize.define(
  "user_derictory_users",
  {
    id: { type: DataTypes.INTEGER, unique: true, autoIncrement: true, primaryKey: true },
    username: {
      //имя отправителя
      unique: true,
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      unique: true,
      type: DataTypes.STRING,
      allowNull: false,
    },
    fullName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    region: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {}
);
user_derictory_users.sync();
module.exports = user_derictory_users;
