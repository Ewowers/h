const { DataTypes } = require("sequelize");
const sequelize = require("../../../pg.config");

const Providing = sequelize.define(
  "architecture-propertyRefences-clarification-objectInfo",
  {
    id: { type: DataTypes.INTEGER, unique: true, autoIncrement: true, primaryKey: true },
    id: { type: DataTypes.INTEGER, unique: true, autoIncrement: true, primaryKey: true },
    address: { type: DataTypes.STRING }, //Адресс объекта
    archLocation: { type: DataTypes.STRING }, //
    area: { type: DataTypes.STRING }, //
    cabinetsCount: { type: DataTypes.STRING }, //
    cadastreNumber: { type: DataTypes.STRING }, //Кадастровый номер
    changeReason: { type: DataTypes.STRING },
    commissionMessage: { type: DataTypes.STRING },
    designer: { type: DataTypes.STRING }, //проектировщик
    difficult: { type: DataTypes.STRING },
    flatsCount: { type: DataTypes.STRING },
    floorsCount: { type: DataTypes.STRING },
    inOzo: { type: DataTypes.STRING },
    licenseCategoryGsl: { type: DataTypes.STRING }, //Категория лицензий гсл
    licenseDateGsl: { type: DataTypes.STRING }, //Дата выдачи лицензий
    licenseNumberGsl: { type: DataTypes.STRING }, //Номер лицензий
    location: { type: DataTypes.STRING }, //Карта
    name: { type: DataTypes.STRING }, //Найменование объекта
    period: { type: DataTypes.STRING }, //
    purpose: { type: DataTypes.STRING },
    purposeRequested: { type: DataTypes.STRING },
    roomsCount: { type: DataTypes.STRING },
    useRight: { type: DataTypes.STRING },
    userId: { type: DataTypes.INTEGER }, //id пользователья
  },
  {}
);
Providing.sync();
module.exports = Providing;
