const { DataTypes, Sequelize } = require("sequelize");
const sequelize = require("../../pg.config");

const objectInfo = sequelize.define(
  "objectInfo",
  {
    id: { type: DataTypes.INTEGER, unique: true, autoIncrement: true, primaryKey: true },
    additionalArea: { type: DataTypes.STRING },
    additionalPurposeUse: { type: DataTypes.STRING },
    address: { type: DataTypes.STRING },
    archLocation: { type: DataTypes.STRING },
    area: { type: DataTypes.FLOAT },
    cabinetsCount: { type: DataTypes.STRING },
    cadastreNumber: { type: DataTypes.STRING },
    changeReason: { type: DataTypes.STRING },
    designer: { type: DataTypes.STRING },
    difficult: { type: DataTypes.STRING },
    extendLocation: { type: DataTypes.STRING },
    flatsCount: { type: DataTypes.STRING },
    floorsCount: { type: DataTypes.STRING },
    identDocDate: { type: DataTypes.STRING },
    identDocNumber: { type: DataTypes.STRING },
    inOzo: { type: DataTypes.STRING },
    legalDocDate: { type: DataTypes.STRING },
    legalDocNumber: { type: DataTypes.STRING },
    licenseCategoryGsl: { type: DataTypes.STRING },
    licenseDateGsl: { type: DataTypes.STRING },
    licenseNumberGsl: { type: DataTypes.STRING },
    location: { type: DataTypes.TEXT },
    name: { type: DataTypes.STRING },
    period: { type: DataTypes.STRING },
    purpose: { type: DataTypes.STRING },
    purposeRequested: { type: DataTypes.STRING },
    roomsCount: { type: DataTypes.STRING },
    useRight: { type: DataTypes.STRING },
    oldAddress: { type: DataTypes.STRING },
    onClarification: { type: DataTypes.STRING },
    onCommission: { type: DataTypes.STRING },
    onNumeration: { type: DataTypes.STRING },
    open: { type: DataTypes.STRING },
    org: { type: DataTypes.STRING },
    orgName: { type: DataTypes.STRING },
    otherApplicant: { type: DataTypes.STRING },
    ozoInfo: { type: DataTypes.STRING },
    ozoSigned: { type: DataTypes.STRING },
    ozoSignedDate: { type: DataTypes.STRING },
    ozoSignedUserId: { type: DataTypes.STRING },
    ozoSignedXml: { type: DataTypes.STRING },
    phone: { type: DataTypes.STRING },
    planEndDate: { type: DataTypes.STRING },
    projectAddress: { type: DataTypes.STRING },
    projectName: { type: DataTypes.STRING },
    regDate: { type: DataTypes.STRING },
    regNumber: { type: DataTypes.STRING },
    regionId: { type: DataTypes.INTEGER },
    rejectedFile: { type: DataTypes.STRING },
    rejectedFileOriginal: { type: DataTypes.STRING },
    requestNumber: { type: DataTypes.STRING },
    schemaZu: { type: DataTypes.STRING },
    secondName: { type: DataTypes.STRING },
    sewerageInfo: { type: DataTypes.STRING },
    signed: { type: DataTypes.STRING },
    signedDate: { type: DataTypes.STRING },
    signedXml: { type: DataTypes.STRING },
    subscribeEmail: { type: DataTypes.STRING },
  },
  {}
);
objectInfo.sync();
module.exports = objectInfo;
