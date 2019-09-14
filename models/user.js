const Sequelize = require("sequelize");
const db = require("../config/database");
const userType = require("../models/user_type");
const ticket = require("../models/ticket");

const User = db.define("user", {
  // attributes
  type_user: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  mail: {
    type: Sequelize.STRING,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
    // allowNull defaults to true
  }
});
//User.hasOne(userType);
//User.hasMany(ticket);
module.exports = User;
