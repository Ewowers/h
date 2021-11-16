const { DataTypes } = require("sequelize");
const sequelize = require("../pg.config");

const city = sequelize.define(
  "ecp",
  {
    id: { type: DataTypes.INTEGER, unique: true, autoIncrement: true, primaryKey: true },
    fullName: {
      //фио
      type: DataTypes.STRING,
      allowNull: false,
    },
    iin: {
      //иин
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {}
);
city.sync();
module.exports = city;
