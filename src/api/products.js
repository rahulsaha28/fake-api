// import
const ProductService = require("../service/product-service");
const { FormatData } = require("../utils");
const { STATUS_CODE } = require("../utils/app-error");

// @ route function
module.exports = async (app) => {
  const productService = new ProductService();

  // get the items by id
  app.get("/product/:id", async (req, res, next) => {
    try {
      const data = await productService.GetProductById(req.params, next);
      const formatData = FormatData(data);
      res.status(STATUS_CODE.OK);
      return res.json(formatData);
    } catch (error) {
      next(error);
    }
  });

  // create a item
  app.post("/product/create", async (req, res, next) => {
    try {
      const data = await productService.CreateProduct(req.body, next);
      const formatData = FormatData(
        data,
        (mess = "Created the item successfully.")
      );
      res.status(200).json(formatData);
    } catch (error) {
      next(error);
    }
  });

  // update a item
  app.put("/product/:id", async (req, res, next) => {
    try {
      const data = await productService.UpdateProductById(
        {
          ...req.body,
          id: req.params?.id,
        },
        next
      );
      const formatData = FormatData(
        data,
        (mess = "Item successfully updated.")
      );
      res.status(200).json(formatData);
    } catch (error) {
      next(error);
    }
  });

  // delete a item
  app.delete("/product/:id", async (req, res, next) => {
    try {
      const data = await productService.DeleteProductById(req.params, next);
      const formatData = FormatData(data, (mess = "item deleted sucessfully"));
      res.status(200).json(formatData);
    } catch (error) {
      next(error);
    }
  });
};
