const Model = require("../model/personal.model");
class Controller {}
class Hellper {
  async Create(userId, formId) {
    const model = await Model.create({
      userId: userId,
      fromId: [],
    });
  }
}
