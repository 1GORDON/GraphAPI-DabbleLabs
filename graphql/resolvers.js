const Nation = require("../models/Nation");

module.exports = {
  Query: {
    async readNation(_, { ID }) {
      return await Nation.findById(ID);
    },
    async getNation(_, { length }) {
      return await Nation.find().sort({ squareKilometres: -1 }).limit(length);
    },
  },
  Mutation: {
    async createNation(
      _,
      { nationInput: { country, year, squareKilometres, totalPopulation } }
    ) {
      const createdNation = new Nation({
        country: country,
        year: year,
        squareKilometres: squareKilometres,
        totalPopulation: totalPopulation,
      });
      const result = await createdNation.save();
      return {
        id: result.id,
        ...result._doc,
      };
    },
    async deleteNation(_, { ID }) {
      const wasDeleted = (await Nation.deleteOne({ _id: ID })).deletedCount;
      return wasDeleted;
    },
    async editNation(
      _,
      { ID, nationInput: { country, year, squareKilometres, totalPopulation } }
    ) {
      const wasEdited = (
        await Nation.updateOne(
          { _id: ID },
          {
            country: country,
            year: year,
            squareKilometres: squareKilometres,
            totalPopulation: totalPopulation,
          }
        )
      ).modifiedCount;
      return wasEdited;
    },
  },
};
