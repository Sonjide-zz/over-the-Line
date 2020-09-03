const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv/config");

const app = express();
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

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`App is running on port ${ PORT }`);
});
