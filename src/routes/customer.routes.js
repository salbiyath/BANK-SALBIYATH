module.exports = (app) => {
  const customerController = require("../controllers/customer/customer.controller");
  const {
    validateCustomer,
  } = require("../middleware/validator/customer.validator");
  const router = require("express").Router();
  // Create a new Tutorial
  router.post("/", validateCustomer, customerController.create);
  // Retrieve all Tutorials
  router.get("/", customerController.findAll);
  // Retrieve all published Tutorials
  router.get("/published", customerController.findAllPublished);
  // Retrieve a single Tutorial with id
  router.get("/:id", customerController.findOne);
  // Update a Tutorial with id
  router.put("/:id", customerController.update);
  // Delete a Tutorial with id
  router.delete("/:id", customerController.delete);
  // Delete all Tutorials
  router.delete("/", customerController.deleteAll);
  // Get hello
  router.get("/hello", function () {
    return "Hello world";
  });

  app.use("/api/customer", router);
};
