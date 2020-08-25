const express = require("express")
const mongoose = require("mongoose");

const artistsSchema = new mongoose.Schema();

module.exports = mongoose.model("artists", artistsSchema);
