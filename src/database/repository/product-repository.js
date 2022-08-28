const { STATUS_CODE } = require("../../utils/app-error");
const { ProductModel } = require("../models");
const createError = require("http-errors");

class ProductRepository {
  // item created
  async Create({ p_name, p_des, p_price, p_img, p_color }, next) {
    try {
      const product = ProductModel.build({
        p_name,
        p_des,
        p_img,
        p_color,
        p_price,
      });

      await product.save();

      return product;
    } catch (error) {
      next(createError(STATUS_CODE.NOT_IMPLEMENTED, error.message));
    }
  }

  // item get by id
  async GetById({ id }, next) {
    try {
      const data = await ProductModel.findOne({ where: { _id: id } });
      if (!data)
        return next(createError(STATUS_CODE.NOT_FOUND, "Product not found."));
      return data;
    } catch (error) {
      next(error);
    }
  }
  // item update
  async UpdateById({ id, ...restData }, next) {
    try {
      const product = await ProductModel.update(restData, {
        where: { _id: id },
      });
      console.log(product);
      if (product?.indexOf(0) === 0)
        return next(
          createError(STATUS_CODE.NOT_IMPLEMENTED, "Item not updated.")
        );
      return product;
    } catch (error) {
      next(error);
    }
  }
  // item delete
  async DeleteById({ id }, next) {
    try {
      const product = await ProductModel.destroy({ where: { _id: id } });
      return product;
    } catch (error) {
      next(error);
    }
  }
}

module.exports = ProductRepository;
