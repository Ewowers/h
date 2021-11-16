const { DataTypes } = require("sequelize");
const sequelize = require("../../pg.config");

const Statement = sequelize.define(
  "relation-statement",
  {
    id: { type: DataTypes.INTEGER, unique: true, autoIncrement: true, primaryKey: true },
    //app
    lastName: { type: DataTypes.STRING }, //Фамилия
    firstName: { type: DataTypes.STRING }, //Имя
    secondName: { type: DataTypes.STRING }, // Очество
    address: { type: DataTypes.STRING }, //Адресс
    phone: { type: DataTypes.STRING }, //Телефон
    iin: { type: DataTypes.STRING }, //ИИН
    userId: { type: DataTypes.INTEGER, allowNull: false }, //id пользователья
    username: { type: DataTypes.STRING }, //Логин пользователя
    //landinfo
    LlastName: { type: DataTypes.STRING }, //Фамилия разработчика землеустроительного проекта
    LfirstName: { type: DataTypes.STRING }, //Имя разработчика
    LsecondName: { type: DataTypes.STRING }, //Отчество разработчика
    orgName: { type: DataTypes.STRING }, //Наименование юридического лица разработчика
    copyCount: { type: DataTypes.STRING }, //Количество экземпляров землеустроительного проекта
    protocolNumber: { type: DataTypes.STRING }, //Номер протокола земельной коммиссии
    protocolDate: { type: DataTypes.DATE }, //Дата протокола земельной коммиссии
    //Object info
    name: { type: DataTypes.STRING }, //Найменование объекта
    address: { type: DataTypes.STRING }, //Адресс объекта
    cadastreNumber: { type: DataTypes.STRING }, //Кадастровый номер
    //file
    landFile: { type: DataTypes.TEXT }, //Землеустроительный проект
    documentFile: { type: DataTypes.TEXT }, //"Документ о согласовании с уполномоченным государственным органом Республики Казахстан в сфере нефтегазотранспортной инфраструктуры в случае испрашивания земельного участка для строительства объектов нефтегазотранспортной инфраструктуры, связанных с транспортировкой по магистральным нефтепроводам, последующим хранением и перевалкой нефти и газа на другие виды транспорта",
  },
  {}
);
Statement.sync();
module.exports = Statement;
