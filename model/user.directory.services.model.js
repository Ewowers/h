const { DataTypes } = require("sequelize");
const sequelize = require("../pg.config");

const user_derictory_users = sequelize.define(
  "user_derictory_users",
  {
    id: { type: DataTypes.INTEGER, unique: true, autoIncrement: true, primaryKey: true },
    userId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    code: {
      //КОД БП
      type: DataTypes.STRING,
      allowNull: false,
    },
    shortTitle: {
      //кратное найменование
      type: DataTypes.STRING,
      allowNull: false,
    },
    fullTitle: {
      //полное найменование
      type: DataTypes.TEXT,
      allowNull: false,
    },
    comment: {
      //комментарий
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  {}
);
user_derictory_users.sync();
module.exports = user_derictory_users;
