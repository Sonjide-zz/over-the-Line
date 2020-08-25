const express = require("express");
const router = express.Router();
const Artists = require('../models/artists')

router.get("/", async (req, res) => {
  try {
    const artists = await Artists.find();
    res.status(200).json(artists);
  } catch (err) {
    res.json({
      message: err,
    });
  }
});

module.exports = router;
