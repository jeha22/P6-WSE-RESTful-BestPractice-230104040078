const express = require("express");
const router = express.Router();

let products = require("../data/products.data");
const validateProduct = require("../middlewares/validateProduct");
const apiResponse = require("../utils/apiResponse");

// GET ALL
router.get("/", (req, res) => {
  apiResponse.success(res, "List products", products);
});

// GET BY ID
router.get("/:id", (req, res) => {
  const product = products.find((p) => p.id == req.params.id);
  if (!product) {
    return apiResponse.error(res, "Product not found", 404);
  }
  apiResponse.success(res, "Product found", product);
});

// POST
router.post("/", validateProduct, (req, res) => {
  const newProduct = {
    id: products.length + 1,
    ...req.body,
  };
  products.push(newProduct);
  apiResponse.success(res, "Product created", newProduct, 201);
});

// PUT (FULL UPDATE)
router.put("/:id", validateProduct, (req, res) => {
  const index = products.findIndex((p) => p.id == req.params.id);
  if (index === -1) {
    return apiResponse.error(res, "Product not found", 404);
  }

  products[index] = { id: products[index].id, ...req.body };
  apiResponse.success(res, "Product updated", products[index]);
});

// PATCH (PARTIAL)
router.patch("/:id", (req, res) => {
  const product = products.find((p) => p.id == req.params.id);
  if (!product) {
    return apiResponse.error(res, "Product not found", 404);
  }

  Object.assign(product, req.body);
  apiResponse.success(res, "Product partially updated", product);
});

// DELETE
router.delete("/:id", (req, res) => {
  const index = products.findIndex((p) => p.id == req.params.id);
  if (index === -1) {
    return apiResponse.error(res, "Product not found", 404);
  }

  products.splice(index, 1);
  apiResponse.success(res, "Product deleted", null, 204);
});

// TEST ERROR 500
router.get("/crash/test", (req, res) => {
  throw new Error("Simulated server error");
});

module.exports = router;
