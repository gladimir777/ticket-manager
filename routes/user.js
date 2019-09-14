const express = require("express");
const router = express.Router();
///const database = require("../config/database");
const user = require("../models/user");

// get user data
router.get("/", (req, res) => {
  user
    .findAll()
    .then(users => {
      console.log("All users:", JSON.stringify(users, null, 4));
      res.status(200).json(users);
    })
    .catch(err => {
      console.log("somthing went wrong", err);
      res.status(500).json({ err: "somthing went wrong" });
    });
});

// add user
router.post("/adduser", (req, res) => {
  const { userType, name, mail, password } = req.body;
  user
    .create({
      type_user: userType,
      name,
      mail,
      password
    })
    .then(result => {
      console.log(result);
      res.status(200).json(result.dataValues);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ err: "Something went wrong" });
    });
});
module.exports = router;
