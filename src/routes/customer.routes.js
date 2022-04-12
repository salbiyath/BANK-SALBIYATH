module.exports = (app) => {
  const customerController = require("../controllers/customer.controller");
  const {
    validateCustomer,
  } = require("../middleware/validator/customer.validator");
  const router = require("express").Router();
  // Create a new Tutorial
  router.post("/", customerController.create);
  // Retrieve all Tutorials
  router.get("/", customerController.findAll);
  // Retrieve a single Tutorial with id
  router.get("/:id", customerController.findOne);
  // Update a Tutorial with id
  router.put("/:id", customerController.update);
  // Delete a Tutorial with id
  router.delete("/:id", customerController.delete);

  app.use("/api/customer", router);
};
