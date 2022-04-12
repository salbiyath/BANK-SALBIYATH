const Sequelize = require("sequelize");
const config = require("../config/config");

const sequelize = new Sequelize(config.database, config.user, config.password, {
  host: config.host,
  dialect: config.dialect,
  operatorsAliases: false,
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.customers = require("./customer.model.js")(sequelize, Sequelize);
module.exports = db;
