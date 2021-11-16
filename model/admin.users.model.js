const { DataTypes } = require("sequelize");
const sequelize = require("../pg.config");

const admin_user = sequelize.define(
  "admin_user",
  {
    id: { type: DataTypes.INTEGER, unique: true, autoIncrement: true, primaryKey: true },
    //логин
    username: { type: DataTypes.STRING, unique: true, allowNull: false },
    //пороль
    password: { type: DataTypes.STRING, allowNull: false },
    //почта
    email: { type: DataTypes.STRING, allowNull: false },
    //имя
    firstName: { type: DataTypes.STRING, allowNull: false },
    //фамилия
    lastName: { type: DataTypes.STRING, allowNull: false },
    //очество
    lastlastName: { type: DataTypes.STRING, allowNull: true },
    //ИИН
    iin: { type: DataTypes.STRING, allowNull: false },
    //БИН
    bin: { type: DataTypes.STRING, allowNull: true },
    //должность
    status: { type: DataTypes.STRING, defaultValue: "Не указано" },
    //организация
    organization: { type: DataTypes.STRING, allowNull: true },
    //role
    role: { type: DataTypes.STRING, allowNull: false },
    //слой
    layer: { type: DataTypes.STRING, allowNull: true },
  },
  {}
);
admin_user.sync();

module.exports = admin_user;
