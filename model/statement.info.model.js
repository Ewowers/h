const { DataTypes } = require("sequelize");
const sequelize = require("../pg.config");
const Statement = sequelize.define(
  "statementInfo",

  {
    id: {
      type: DataTypes.INTEGER,
      unique: true,
      autoIncrement: true,
      primaryKey: true,
    },

    firstName: { type: DataTypes.STRING, allowNull: false },
    lastName: { type: DataTypes.STRING, allowNull: true },
    secondName: { type: DataTypes.STRING, allowNull: true },
    username: { type: DataTypes.STRING, allowNull: false },
    blocked: { type: DataTypes.BOOLEAN, allowNull: true },
    active: { type: DataTypes.BOOLEAN, allowNull: true },
    iin: { type: DataTypes.STRING, allowNull: true },
    bin: { type: DataTypes.STRING, allowNull: true },
    orgName: { type: DataTypes.STRING, allowNull: true },
    userType: { type: DataTypes.STRING, allowNull: true },
    organization: { type: DataTypes.TEXT, allowNull: true },
    roles: { type: DataTypes.ARRAY(DataTypes.STRING), allowNull: true },
    link: { type: DataTypes.STRING, allowNull: true },
    positionRu: { type: DataTypes.STRING, allowNull: true },
    positionKk: { type: DataTypes.STRING, allowNull: true },
    email: { type: DataTypes.STRING, allowNull: true },
    akimatPosition: { type: DataTypes.STRING, allowNull: true },
    allowGeoportal: { type: DataTypes.STRING, allowNull: true },
    allowMonitoring: { type: DataTypes.STRING, allowNull: true },
  },
  {}
);
Statement.sync();
module.exports = Statement;
