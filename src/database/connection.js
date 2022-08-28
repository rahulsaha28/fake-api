const { sequelize } = require("./db");

module.exports = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection established successfully.");
  } catch (error) {
    console.log("Error ================");
    console.log("Error in db connection.");
    process.exit(1);
  }
};
