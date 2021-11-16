const { DataTypes } = require("sequelize");
const sequelize = require("../pg.config");

const land_relations = sequelize.define(
  "land_relations",
  {
    id: { type: DataTypes.INTEGER, unique: true, autoIncrement: true, primaryKey: true },
    title_ru: { type: DataTypes.STRING, allowNull: false },
    title_kz: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.TEXT },
  },
  {}
);
const architecture_and_urban_planning = sequelize.define(
  "architecture_and_urban_planning",
  {
    id: { type: DataTypes.INTEGER, unique: true, autoIncrement: true, primaryKey: true },
    title_ru: { type: DataTypes.STRING, allowNull: false },
    title_kz: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.TEXT },
  },
  {}
);
const support_for_business = sequelize.define(
  "support_for_business",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, unique: true },
    title_ru: { type: DataTypes.STRING, allowNull: false },
    title_kz: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.TEXT, allowNull: false },
  },
  {}
);
land_relations.sync();
architecture_and_urban_planning.sync();
support_for_business.sync();
module.exports = { land_relations, architecture_and_urban_planning, support_for_business };
