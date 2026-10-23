const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const notesRouter = require("./router/notesRouter");

const app = express();

app.use(express.json());

app.use(
    cors({
        origin: "http://localhost:5173"
    })
);


connectDB();

app.get("/", (req, res) => {
    res.send("home page is open..");
});

app.use("/notes", notesRouter);

module.exports = app;