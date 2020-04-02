const express = require('express');
const router = express.Router();
const blogsModel = require('../models/blogsModel');

/* GET home page. */
router.get('/', async function(req, res, next) {
  const resultData = await blogsModel.getAllBlogs();
  console.log(resultData);
  res.json(resultData).status(200)
});

module.exports = router;