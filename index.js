const express = require("express");
const mongoose = require('mongoose');
const router = require("./routes/routes");
const cors = require("cors");

const app = express();

mongoose.connect("mongodb://127.0.0.1:27017/familytree").then(()=> console.log("MongoDB Connected...")).catch((err)=> console.log("Error: ", err));

app.use(cors());
app.use(express.json({extended: false}));
app.use(express.urlencoded({extended: false}));
app.use("/", router);


app.listen(8000, console.log("Server started..."));