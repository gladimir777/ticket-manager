const express = require("express");
const router = express.Router();
///const database = require("../config/database");
const ticket = require("../models/ticket");

router.get("/", (req, res) => {
  ticket
    .findAll()
    .then(tickets => {
      console.log("All tickets:", JSON.stringify(tickets, null, 4));
      res.status(200).json(tickets);
    })
    .catch(err => {
      console.log("somthing went wrong", err);
      res.status(500).json({ err: "somethimg whent wrong" });
    });
});

router.post("/addticket", (req, res) => {
  const { iduser, ticketpedido } = req.body;
  console.log("add tickets", iduser);
  ticket
    .create({
      id_user: iduser,
      ticket_pedido: ticketpedido
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
