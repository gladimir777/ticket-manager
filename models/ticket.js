const Sequelize = require("sequelize");
const db = require("../config/database");
const User = require("../models/user");

const Ticket = db.define("ticket", {
  // attributes
  id_user: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  ticket_pedido: {
    type: Sequelize.STRING,
    allowNull: false
  }
});
//Ticket.hasOne(User);
module.exports = Ticket;
