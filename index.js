const express = require("express");
const app = express();
const bodyparser = require("body-parser");

// database
const db = require("./config/database");

//body parser
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
// db connection
db.authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch(err => {
    console.error("Unable to connect to the database:", err);
  });

// routes
app.use("/user", require("./routes/user"));
app.use("/tickets", require("./routes/ticket"));
app.use("/usertype", require("./routes/user_type"));

//Testing the ticket manager api
app.get("/", (req, res) => {
  res.send("API Runing");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
