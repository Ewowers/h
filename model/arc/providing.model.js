const { DataTypes } = require("sequelize");
const sequelize = require("../../pg.config");

const Providing = sequelize.define(
  "architecture-providing",
  {
    id: { type: DataTypes.INTEGER, unique: true, autoIncrement: true, primaryKey: true },
    //app
    lastName: { type: DataTypes.STRING }, //Фамилия
    firstName: { type: DataTypes.STRING }, //Имя
    secondName: { type: DataTypes.STRING }, // Очество
    address: { type: DataTypes.STRING }, //Адресс
    phone: { type: DataTypes.STRING }, //Телефон
    userId: { type: DataTypes.INTEGER }, //id пользователья
    username: { type: DataTypes.STRING }, //логин пользователя
    //desinger
    firstName: { type: DataTypes.STRING }, // Имя проектировщика
    iin: { type: DataTypes.STRING }, // иин
    lastName: { type: DataTypes.STRING }, //Фамилия проектировщика
    licenseCategory: { type: DataTypes.STRING }, //Категория лицензий
    licenseNumber: { type: DataTypes.STRING }, //Лицензия проектировщика
    phone: { type: DataTypes.STRING }, //Телефон
    secondName: { type: DataTypes.STRING }, //Очество проектировщика
    //objectinfo
    name: { type: DataTypes.STRING }, //Найменование объекта
    address: { type: DataTypes.STRING }, // Адресс объекта
    period: { type: DataTypes.INTEGER }, //Срок стройтельсва по нормам(месяц)
    floorsCount: { type: DataTypes.INTEGER }, //Количество этажей
    area: { type: DataTypes.INTEGER }, //площадь Объекта
    flatsCount: { type: DataTypes.INTEGER }, //Количество квартир
    roomsCount: { type: DataTypes.INTEGER }, //количество номеров(без понятие что это)
    cabinetsCount: { type: DataTypes.INTEGER }, //Количество кабинетов
    cadastreNumber: { type: DataTypes.STRING }, //кадастровый номер
    location: { type: DataTypes.TEXT }, //Похоже на точку в карте
    //file
    upload: { type: DataTypes.TEXT }, //копия документов // формат base 64
    //power
    requiredPower: { type: DataTypes.INTEGER }, //Требуемая мощность, кВт
    phase: { type: DataTypes.JSON }, //Характер нагрузки
    phasePeriod: { type: DataTypes.JSON }, //Характер нагрузки периодичность
    relCat: { type: DataTypes.STRING }, //Категория надежности
    maxLoad: { type: DataTypes.INTEGER }, //Существующая максимальная нагрузка
    boilerCount: { type: DataTypes.INTEGER }, //Электро котлы шт
    boilerPower: { type: DataTypes.INTEGER }, //Электро котлы кВТ
    heaterCount: { type: DataTypes.INTEGER }, //Электрокалориферы ШТ
    heaterPower: { type: DataTypes.INTEGER }, //Электрокалориферы кВт
    stoveCount: { type: DataTypes.INTEGER }, //Электроплитки ШТ
    furnaceCount: { type: DataTypes.INTEGER }, //Электро печи шт
    furnacePower: { type: DataTypes.INTEGER }, //электро печи кВт
    waterHeaterCount: { type: DataTypes.INTEGER }, //Электроводонагреватели ШТ
    waterHeaterPower: { type: DataTypes.INTEGER }, //Электроводонагреватели кВт
    transformerNumber1: { type: DataTypes.STRING }, //Мощность трансформатора 1 ТП
    transformerNumber2: { type: DataTypes.STRING }, //Мощность трансформатора 2 ТП
    transformerPower1: { type: DataTypes.INTEGER }, //Мощность трансформатора 1 кВА
    transformerPower2: { type: DataTypes.INTEGER }, //Мощность трансформатора 2 кВА
    stovePower: { type: DataTypes.INTEGER }, //Электроплитки кВт
    //heatinfo
    heating: { type: DataTypes.INTEGER }, //Отопление *
    hotWater: { type: DataTypes.INTEGER }, //Горячее водоснабжение *
    technical: { type: DataTypes.INTEGER }, //Технологические нужды (пар) *
    total: { type: DataTypes.INTEGER }, //Общая тепловая нагрузка *
    ventilation: { type: DataTypes.INTEGER }, //Вентиляция (всего) *
    //water
    dayDrink: { type: DataTypes.INTEGER }, //На хозяйственно-питьевые нужды *
    firefighting: { type: DataTypes.INTEGER }, //Потребные расходы на пожаротушения *
    hourDrink: { type: DataTypes.INTEGER }, //На хозяйственно-питьевые нужды *
    hourIndustrial: { type: DataTypes.INTEGER }, //На производственные нужды *
    maxDrink: { type: DataTypes.INTEGER }, //Максимальная на хозяйственно-питьевые нужды *
    maxIndustrial: { type: DataTypes.INTEGER }, //Максимально на производственные нужды *
    maxTotal: { type: DataTypes.INTEGER }, //Максимальная общая потребность в воде *
    total: { type: DataTypes.INTEGER }, //Общая потребность в воде *
    totalDrink: { type: DataTypes.INTEGER }, //Общая потребность в питьевой воде *
    //sewerageInfo
    clean: { type: DataTypes.INTEGER }, // Условно чистые (всего) *
    fecal: { type: DataTypes.INTEGER }, //Фекальные (всего) *
    industrial: { type: DataTypes.INTEGER }, //Производственно загрязненные (всего) *
    maxClean: { type: DataTypes.INTEGER }, //Условно чистые максимум (всего) *
    maxFecal: { type: DataTypes.INTEGER }, //Фекальные максимум (всего) *
    maxIndustrial: { type: DataTypes.INTEGER }, //Производственно максимум загрязненные (всего) *
    maxTotal: { type: DataTypes.INTEGER }, //Максимальное общее количество сточных вод
    total: { type: DataTypes.INTEGER }, //Общее количество сточных вод *
    //gas
    conditioning: { type: DataTypes.INTEGER }, //Кондиционирование
    cooking: { type: DataTypes.INTEGER }, //Приготовление пищи *
    heating: { type: DataTypes.INTEGER }, //Отопление *
    hotWater: { type: DataTypes.INTEGER }, //Горячее водоснабжение *
    total: { type: DataTypes.INTEGER }, //Общая потребляемость *
    ventilation: { type: DataTypes.INTEGER }, //Вентиляция *
  },
  {}
);
Providing.sync();
module.exports = Providing;
