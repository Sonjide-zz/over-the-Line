const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv/config");

//MIDDLEWARES
app.use(cors());

const uri = process.env.DATABASE_URI;

const artistRoute = require("./routes/artists");

app.use(artistRoute);

mongoose.connect(
  uri,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected to Database");
  }
);

app.listen(3001);
