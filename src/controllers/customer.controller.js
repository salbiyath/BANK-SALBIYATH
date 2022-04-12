const db = require("../models");
const { validationResult } = require("express-validator");
const Customer = db.customers;
const Op = db.Sequelize.Op;

// Create and Save a new Customer
exports.create = async (req, res) => {
  try {
    const errors = validationResult(req); // Finds the validation errors in this request and wraps them in an object with handy functions

    if (!errors.isEmpty()) {
      res.status(422).json({ errors: errors.array() });
      return;
    }

    const { nik, nama, jk, no_hp, alamat, tempat_lahir, tanggal_lahir } =
      req.body;
    const customer = await Customer.create({
      nik,
      nama,
      no_hp,
      alamat,
      tempat_lahir,
      jk,
      tempat_lahir,
      tanggal_lahir,
    });

    res.json(customer);
  } catch (err) {
    const errObj = {};
    err.errors.map((er) => {
      errObj[er.path] = er.message;
    });
    res.status(422).send({
      Error: {
        message: errObj,
      },
    });
  }
};

// Retrieve all Tutorials from the database.
exports.findAll = async (req, res) => {
  await Customer.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving customer.",
      });
    });
};

// Find a single Customer with an id
exports.findOne = async (req, res) => {
  const id = req.params.id;
  await Customer.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Customer with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Customer with id=" + id,
      });
    });
};

// Update a Customer by the id in the request
exports.update = async (req, res) => {
  const id = req.params.id;
  await Customer.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Customer was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Customer with id=${id}. Maybe Customer was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Customer with id=" + id,
      });
    });
};

// Delete a Customer with the specified id in the request
exports.delete = async (req, res) => {
  const id = req.params.id;
  await Customer.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Customer was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Customer with id=${id}. Maybe Customer was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Customer with id=" + id,
      });
    });
};
