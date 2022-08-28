const express = require("express");
const { PORT } = require("./config");
const { DatabaseConnection } = require("./database");

const AppExress = require("./express-app");
const { BaseError } = require("./utils");

const StartServer = async () => {
  const app = express();

  // connect the data base
  await DatabaseConnection();

  await AppExress(app);

  // app is listening here
  app
    .listen(PORT, () => {
      console.log(`listening on port ${PORT}`);
    })
    .on("error", (err) => {
      console.log(err);
      process.exit();
    });
};

// app is starting here
StartServer();
