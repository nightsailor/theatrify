const router = require("express").Router();
const Performance = require("../models/Performance");

router.post("/create", async (req, res) => {
  try {
    const newEvent = new Performance({
      username: req.body.name,
      email: req.body.email,
      totalCrew: req.body.totalCrew,
      eventAddress: req.body.eventAddress,
      theme: req.body.theme
    });

    const performance = await newEvent.save();
    res.status(200).json(performance);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/email", async (req, res) => {
  try {
    const performance = await Performance.findOne({ email: req.body.email });
    !performance && res.status(400).json("Wrong email!");

    res.status(200).json(performance);
  } catch (err) {
    res.status(500).json(err);
  }
});


router.post("/", async (req, res) => {
  try {
    const performance = await Performance.find({});
    !performance && res.status(400).json("Something went wrong!");

    res.status(200).json(performance);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
