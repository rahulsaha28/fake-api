const { Sequelize, DataTypes } = require("sequelize");
const { sequelize } = require("../db");

const Product = sequelize.define("Product", {
  _id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  p_name: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  p_des: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  p_price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  p_img: {
    type: DataTypes.TEXT,
    defaultValue: "",
  },
  p_color: {
    type: DataTypes.ARRAY(DataTypes.TEXT),
  },
});

sequelize.sync();

module.exports = {
  Product,
};
