const { DataTypes } = require("sequelize");
const sequelize = require("../../pg.config");

const fs_files = sequelize.define(
  "fs.files",
  {
    id: { type: DataTypes.INTEGER, unique: true, autoIncrement: true, primaryKey: true },
    //Найменование
    _id: { type: DataTypes.STRING },
    filename: { type: DataTypes.STRING },
    length: { type: DataTypes.BIGINT },
    chunkSize: { type: DataTypes.INTEGER },
    uploadDate: { type: DataTypes.STRING },
    md5: { type: DataTypes.STRING },
    metadata: { type: DataTypes.JSON },
  },
  {}
);
fs_files.sync();
module.exports = fs_files;
