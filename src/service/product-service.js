const { ProductRepository } = require("../database");

class ProductService {
  constructor() {
    this.repository = new ProductRepository();
  }
  async CreateProduct(itemInputs, next) {
    try {
      const productResult = await this.repository.Create(itemInputs, next);
      return productResult;
    } catch (error) {
      next(error);
    }
  }

  // get the item by id
  async GetProductById(itemId, next) {
    try {
      const productResult = await this.repository.GetById(itemId, next);
      return productResult;
    } catch (error) {}
  }
  //item update
  async UpdateProductById(updateInput, next) {
    try {
      const productResult = await this.repository.UpdateById(updateInput, next);
      return productResult;
    } catch (error) {
      next(error);
    }
  }

  // item delete
  async DeleteProductById(itemId, next) {
    try {
      const productResult = await this.repository.DeleteById(itemId, next);
      return productResult;
    } catch (error) {
      next(error);
    }
  }
}

module.exports = ProductService;
