const express = require("express");
const app = express();

//Testing the api
app.get("/", (req, res) => res.send("API Runing"));
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
