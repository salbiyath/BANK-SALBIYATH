const { body } = require("express-validator");

exports.validateCustomer = [
  body("nik")
    .notEmpty()
    .withMessage("NIK is required")
    .isNumeric()
    .withMessage("NIK only number")
    .trim(),
  body("nama").notEmpty().withMessage("Nama").isLength({ min: 1 }),
  body("jk")
    .notEmpty()
    .withMessage("NIK is required")
    .trim()
    .isIn(["laki-laki", "perempuan"])
    .withMessage("Value should laki-laki or perempuan"),
  body("alamat").notEmpty(),
  body("tempat_lahir").notEmpty(),
  body("tanggal_lahir").notEmpty(),
  body("no_hp").notEmpty(),
];
