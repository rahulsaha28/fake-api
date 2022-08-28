const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./db/test.sqlite",
});

module.exports = {
  sequelize,
};
