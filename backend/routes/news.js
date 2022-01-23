const router = require("express").Router();
const News = require("../models/News");

router.post("/join", async (req, res) => {
  try {
    const newNews = new News({
      email: req.body.email
    });

    const news = await newNews.save();
    res.status(200).json(news);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/all", async (req, res) => {
  try {
    const news = await News.find({});
    !news && res.status(400).json("Something went wrong!");

    res.status(200).json(news);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
