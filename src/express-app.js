const express = require("express");
const cors = require("cors");
const { products } = require("./api");
const BodyParsee = require("body-parser");
const { BaseError } = require("./utils");

module.exports = async (app) => {
  app.use(BodyParsee.urlencoded({ extended: true }));
  app.use(express.json({ limit: "1mb" }));
  app.use(cors());

  //   api
  products(app);
  // errors
  app.use(BaseError);
};
