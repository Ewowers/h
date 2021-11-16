const { DataTypes } = require("sequelize");
const sequelize = require("../pg.config");

const admin_ads = sequelize.define(
  "person_menu",
  {
    id: { type: DataTypes.INTEGER, unique: true, autoIncrement: true, primaryKey: true },
    //title
    title: { type: DataTypes.STRING, unique: true, allowNull: false },
    //количество оповещений
    num: { type: DataTypes.INTEGER, defaultValue: 0 },
  },
  {}
);
const start = async () => {
  await admin_ads.sync();
  let arr = [
    "incoming",
    "allTasks",
    "unassignedTasks",
    "outcoming",
    "control",
    "currentTasks",
    "finishedTasks",
    "incomingCorrespondences",
    "outcomingCorrespondences",
  ];
  const test = await admin_ads.findAll();
  if (test.length === 0) {
    arr.forEach(async (item) => {
      await admin_ads.create({ title: item });
    });
  }
};
start();
module.exports = admin_ads;
