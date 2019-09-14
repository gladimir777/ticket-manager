//const Sequelize = require("..config/");

const Sequelize = require("sequelize");
const db = require("../config/database");

const UserType = db.define("user_type", {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

module.exports = UserType;
