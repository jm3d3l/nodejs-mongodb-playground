const express = require("express");
const router = express.Router();
const Course = require("../models/course");

router.post("/", (req, res) => {
  let data = req.body;
  const result = new Course({
    name: data.name,
    author: data.author,
    tags: data.tags,
    isPublished: data.isPublished
  });
  res.send(result);
});

router.get("/", async (req, res) => {
  let course = await Course.find();''
  console.log("cousrse get", course);
  res.send(course);
});

module.exports = router;
