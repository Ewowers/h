const { DataTypes } = require("sequelize");
const sequelize = require("../../../pg.config");

const Providing = sequelize.define(
  "architecture-propertyRefences-elimination-app",
  {
    id: { type: DataTypes.INTEGER, unique: true, autoIncrement: true, primaryKey: true },
    lastName: { type: DataTypes.STRING },
    lastName: { type: DataTypes.STRING },
    secondName: { type: DataTypes.STRING },
    address: { type: DataTypes.STRING },
    phone: { type: DataTypes.STRING },
    userId: { type: DataTypes.INTEGER }, //id пользователья
  },
  {}
);
Providing.sync();
module.exports = Providing;
