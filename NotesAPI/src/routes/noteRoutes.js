const express = require("express");
const noteRouter = express.Router();

noteRouter.get("/", (req, res) => {
    res.send("Note GET Request")
});

noteRouter.post("/", (req, res) => {
    res.send("Note POST Request")
});

module.exports = noteRouter;