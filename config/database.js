const Sequelize = require("sequelize");

// Option 1: Passing parameters separately
const db = new Sequelize("ticketmanager", "postgres", "1988", {
  host: "localhost",
  dialect: "postgres",
  define: {
    timestamps: false
  }
});

module.exports = db;
