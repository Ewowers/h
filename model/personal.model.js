const { DataTypes } = require("sequelize");
const sequelize = require("../pg.config");
const PersonalArea = sequelize.define(
  "Personal_Area",

  {
    id: {
      type: DataTypes.INTEGER,
      unique: true,
      autoIncrement: true,
      primaryKey: true,
    },
    //user
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    formIds: {
      type: DataTypes.INTEGER,
    },
    from: {
      type: DataTypes.STRING,
    },
  },
  {
    createdAt: false,
    updatedAt: false,
  }
);
PersonalArea.sync();
module.exports = PersonalArea;
