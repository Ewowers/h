const { DataTypes, Sequelize } = require("sequelize");
const sequelize = require("../pg.config");
const User = sequelize.define(
  "User",
  {
    // Здесь определяются атрибуты модели
    id: {
      //id
      type: DataTypes.INTEGER,
      unique: true,
      autoIncrement: true,
      primaryKey: true,
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      unique: false,
      defaultValue: true,
    },
    akimatPosition: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false,
    },
    allowGeoportal: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      unique: false,
      defaultValue: true,
    },
    allowMonitoring: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      unique: false,
      defaultValue: false,
    },
    bin: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true,
    },
    blocked: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      unique: false,
      defaultValue: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    },
    iin: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false,
    },
    link: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false,
    },
    orgName: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false,
    },
    positionKk: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false,
    },
    positionRu: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false,
    },
    secondName: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false,
    },
    userType: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false,
    },
    uuid: {
      type: DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4,
    },
    roles: {
      type: DataTypes.TEXT,
      allowNull: true,
      unique: false,
    },
  },
  {
    timestamps: false,
    // Здесь определяются другие настройки модели
  }
);

const organization = sequelize.define(
  "organization",
  {
    id: {
      type: DataTypes.INTEGER,
      unique: true,
      autoIncrement: true,
      primaryKey: true,
    },
    communal: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false,
    },
    headUserName: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false,
    },
    headUserPositionKk: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false,
    },
    headUserPositionRu: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false,
    },
    headUserShortName: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false,
    },
    nameEn: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false,
    },
    nameKk: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false,
    },
    nameRu: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false,
    },
    orgType: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false,
    },
    ozoConfirmer: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false,
    },
    regionId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      unique: false,
    },
    regionNameKk: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false,
    },
    regionNameRu: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false,
    },
    shortName: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false,
    },
    shortNameEn: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false,
    },
    shortNameKk: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false,
    },
    shortNameRu: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false,
    },
  },
  { timestamps: false }
);

User.belongsToMany(organization, { through: "User_Organization" });
organization.belongsToMany(User, { through: "User_Organization" });

User.sync();
organization.sync();
module.exports = User;
