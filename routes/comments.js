const express = require('express');
const router = express.Router();
const blogsModel = require('../models/blogsModel');

router.get("/:blogs_id", async function(req, res, next) {
    const { blogs_id } = req.params;
    const resultData = await blogsModel.getCommentsById(blogs_id);
    console.log("where is my damn data", blogs_id);
    res.json(resultData).status(200)
});

module.exports = router;
