const express = require("express");
const router = express.Router();
const database = require("../config/database");
const userType = require("../models/user_type");

// get user type
router.get("/", (req, res) => {
  userType
    .findAll()
    .then(userType => {
      console.log("All user_type:", JSON.stringify(userType, null, 4));
      res.status(200).json(userType);
    })
    .catch(err => {
      console.log("somthing went wrong", err);
      res.sendStatus(500);
    });
});

//add user type
router.post("/addusertype", (req, res) => {
  const { name } = req.body;
  userType
    .create({
      name
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
