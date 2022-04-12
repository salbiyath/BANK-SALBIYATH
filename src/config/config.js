require("dotenv").config();

const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
const database = process.env.DB_NAME;
const host = process.env.DB_HOST;
const dialect = process.env.DB_DIALECT;
const node_env = process.env.NODE_ENV;

const config = {
  development: {
    user,
    password,
    database,
    host,
    dialect,
  },
  test: {
    user,
    password,
    database,
    host,
    dialect,
  },
  production: {
    user,
    password,
    database,
    host,
    dialect,
  },
};
module.exports = config[node_env];
